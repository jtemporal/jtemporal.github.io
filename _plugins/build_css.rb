# frozen_string_literal: true

# Rebuild Tailwind CSS before each Jekyll build so _site/assets/css/main.css stays current.
Jekyll::Hooks.register :site, :after_init do |_site|
  next if ENV['SKIP_CSS_BUILD'] == '1'

  Jekyll.logger.info 'CSS:', 'Running npm run build:css...'
  success = system('npm run build:css')
  raise 'CSS build failed — run npm install && npm run build:css' unless success
end