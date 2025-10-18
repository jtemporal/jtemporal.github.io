module Jekyll
  class SeriesPageGenerator < Generator
    safe true

    def generate(site)
      # Get all unique series from posts, grouped by language
      series_by_lang = {}
      
      site.posts.docs.each do |post|
        series = post.data['series']
        lang = post.data['lang'] || 'en' # default to English if no lang specified
        
        next unless series
        
        series_by_lang[lang] ||= []
        series_by_lang[lang] << series unless series_by_lang[lang].include?(series)
      end

      # Create pages for each series in each language
      series_by_lang.each do |lang, series_list|
        series_list.each do |series|
          site.pages << SeriesPage.new(site, site.source, series, lang)
        end
      end
    end
  end

  class SeriesPage < Page
    def initialize(site, base, series, lang)
      @site = site
      @base = base
      @dir = lang == 'en' ? "series" : "series-#{lang}"
      @name = "#{Jekyll::Utils.slugify(series)}.html"

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'series.html')
      
      self.data['series'] = series
      self.data['lang'] = lang
      self.data['title'] = lang == 'en' ? "Series: #{series}" : "Série: #{series}"
      self.data['image'] = lang == 'en' ? "https://res.cloudinary.com/jesstemporal/image/upload/v1760808926/covers/series_sd7fdp.jpg" : "https://res.cloudinary.com/jesstemporal/image/upload/v1760808926/covers/series-pt_pcoiep.jpg"
      self.data['bookbanner'] = true
      self.data['permalink'] = "/#{@dir}/#{Jekyll::Utils.slugify(series)}/"
    end
  end
end