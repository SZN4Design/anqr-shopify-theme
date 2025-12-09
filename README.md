# ANQR Shopify Theme

A custom Shopify Online Store 2.0 theme based on the Figma design at https://siren-door-11288878.figma.site/

## Theme Structure

```
shopify-theme/
├── assets/
│   ├── theme.css          # Main stylesheet with design tokens
│   └── theme.js           # JavaScript functionality
├── config/
│   ├── settings_schema.json    # Theme customization options
│   └── settings_data.json      # Default theme settings
├── layout/
│   └── theme.liquid       # Main layout wrapper
├── locales/
│   └── en.default.json    # English translations
├── sections/
│   ├── header.liquid              # Site header with navigation
│   ├── hero-banner.liquid         # Large hero with heading + CTA
│   ├── color-swatches.liquid      # Shop by color section
│   ├── featured-collection.liquid # Product grid section
│   ├── philosophy.liquid          # Brand philosophy text block
│   ├── newsletter.liquid          # Email signup form
│   ├── footer.liquid              # Site footer
│   ├── main-product.liquid        # Product page template
│   ├── main-collection.liquid     # Collection page grid
│   └── collection-banner.liquid   # Collection page header
├── snippets/
│   ├── button.liquid              # Reusable button component
│   ├── icon.liquid                # SVG icon system
│   ├── meta-tags.liquid           # SEO meta tags
│   ├── product-card.liquid        # Product card component
│   └── product-card-placeholder.liquid
├── templates/
│   ├── index.json         # Homepage template
│   ├── page.json          # Standard page template
│   ├── product.json       # Product page template
│   ├── collection.json    # Collection page template
│   └── cart.json          # Cart page template
└── README.md
```

## Figma to Shopify Mapping

| Figma Section | Shopify File |
|--------------|--------------|
| Hero | `sections/hero-banner.liquid` |
| Shop by Color | `sections/color-swatches.liquid` |
| Product Grid | `sections/featured-collection.liquid` |
| Philosophy | `sections/philosophy.liquid` |
| Newsletter | `sections/newsletter.liquid` |
| Header | `sections/header.liquid` |
| Footer | `sections/footer.liquid` |

## Design Tokens

All colors, fonts, and spacing are defined as CSS custom properties in `assets/theme.css`:

### Colors
- `--color-background`: #FAF8F5 (warm off-white)
- `--color-foreground`: #3D3630 (deep warm brown)
- `--color-primary`: #C4B5A5 (warm beige/taupe)
- `--color-secondary`: #F0E9E0 (light cream)
- `--color-accent`: #8B9A82 (sage green)
- `--color-sand`: #DDD5C8 (header/footer)
- `--color-rose`: #D4A5A5 (dusty rose)
- `--color-terracotta`: #C4846C 

### Typography
- Headings: Cormorant Garamond (serif)
- Body: Inter (sans-serif)

## Getting Started

### Prerequisites
- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- A Shopify Partner account or development store

### Development

1. Clone this theme to your local machine
2. Navigate to the `shopify-theme` directory
3. Connect to your Shopify store:
   ```bash
   shopify theme dev --store your-store.myshopify.com
   ```
4. The theme will be served locally with hot reloading

### Deployment

To push the theme to your Shopify store:
```bash
shopify theme push
```

## Asset Export Instructions

From your Figma design, export the following assets:

### Images
- Hero images → Export as WebP, 1920px width
- Product images → Export as WebP, 800px width
- Logo → Export as SVG or PNG with transparency

### Icons
All icons are included as inline SVGs in `snippets/icon.liquid`. Add custom icons to this file as needed.

## Theme Customization

The theme can be customized through the Shopify admin:

1. Go to **Online Store → Themes**
2. Click **Customize** on your theme
3. Available settings:
   - Colors (background, text, accents)
   - Typography (heading and body fonts)
   - Button styling (border radius, padding)
   - Layout (page width, section spacing)
   - Social media links
   - Cart behavior

## Section Settings

Each section is fully customizable with:
- Text content (headings, descriptions, button labels)
- Images with alt text
- Links and URLs
- Padding and spacing
- Collection selection (for product grids)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance

- Lazy loading for images below the fold
- Minimal JavaScript
- Optimized CSS with custom properties
- System fonts as fallbacks

## License

This theme is licensed for use with the associated Shopify store only.
