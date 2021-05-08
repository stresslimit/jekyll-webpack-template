# encoding: utf-8
module Jekyll
  module Randomize
    def randomize(input)
      input.to_a.sort {rand}
    end
  end
end

Liquid::Template.register_filter(Jekyll::Randomize)
