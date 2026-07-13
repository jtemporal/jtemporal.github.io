# frozen_string_literal: true

# Rouge + kramdown emits line numbers as one table row inside pre/code:
#   div.highlight > pre.highlight > code > table.rouge-table
#     td.rouge-gutter > pre.lineno   (all numbers)
#     td.rouge-code   > pre         (all code)
#
# Problems with that shape:
# 1. Invalid HTML (table inside pre, nested pre) — breaks the compress layout
# 2. Soft-wrap makes long code lines taller than one gutter line, so numbers
#    drift and the last lines look unnumbered
#
# Fix: hoist the table out of pre/code, then expand into one <tr> per source
# line so a wrapped line only grows its own row (number stays aligned).

Jekyll::Hooks.register %i[posts pages books], :post_convert do |doc|
  next unless doc.content.is_a?(String)
  next unless doc.content.include?('rouge-table')

  doc.content = doc.content.gsub(
    %r{
      <div\ class="highlight">
        <pre\ class="highlight"><code>
          <table\ class="rouge-table"><tbody><tr>
            <td\ class="rouge-gutter\ gl"><pre\ class="lineno">([\s\S]*?)</pre></td>
            <td\ class="rouge-code"><pre>([\s\S]*?)</pre></td>
          </tr></tbody></table>
        </code></pre>
      </div>
    }x
  ) do
    numbers_raw = Regexp.last_match(1)
    code_html = Regexp.last_match(2)

    numbers = numbers_raw.to_s.split(/\r?\n/)
    code_lines = code_html.to_s.split(/\r?\n/)

    # Drop a trailing empty slot from a final newline.
    numbers.pop if numbers.last == ''
    code_lines.pop if code_lines.last == '' && code_lines.size == numbers.size + 1

    count = [numbers.size, code_lines.size].max
    numbers = (1..count).map(&:to_s) if numbers.size < count
    code_lines << '' while code_lines.size < count

    rows = count.times.map do |i|
      n = numbers[i].to_s
      line = code_lines[i] || ''
      line = '&nbsp;' if line.empty?
      %(<tr><td class="rouge-gutter gl" aria-hidden="true"><span class="ln">#{n}</span></td><td class="rouge-code"><pre class="rouge-code-pre"><code>#{line}</code></pre></td></tr>)
    end

    %(<div class="highlight"><table class="rouge-table"><tbody>#{rows.join}</tbody></table></div>)
  end
end
