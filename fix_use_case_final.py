with open("layouts/shortcodes/use-cases-carousel.html", "r") as f:
    content = f.read()

content = content.replace('<span class="px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-stone-800 text-stone-100">{{', '<span class="px-3 py-1 rounded text-xs font-bold tracking-widest uppercase" style="background-color: {{ .Params.badgeColor }}; color: #ffffff;">{{')

with open("layouts/shortcodes/use-cases-carousel.html", "w") as f:
    f.write(content)
