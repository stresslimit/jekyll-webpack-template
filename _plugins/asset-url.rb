# encoding: utf-8
module Jekyll
  module AssetUrl
    def asset_url(input)
      "/assets/#{input}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetUrl)
