# How to Create and Embed a Map from uMap

This workflow describes how to create a map using uMap and integrate it into a news article.

## Step 1: Create/Edit Map on uMap
1. Go to [umap.openstreetmap.fr](https://umap.openstreetmap.fr/).
2. Log in or create a new map.
3. Use the drawing tools (marker, line, polygon) to add your data.
4. Click **Save** in the top right corner.

## Step 2: Choose Integration Method

### Option A: Embed as Iframe (Recommended for ease of use)
1. Click the **"Share and download"** icon on the left toolbar (three dots connected).
2. Look for the **"Embed and share this map"** section.
3. Choose the size you want (or leave default).
4. Copy the **Iframe code**.
5. Paste it directly into your markdown file (e.g., `src/content/news/your-article.md`).

> [!TIP]
> This method is interactive and updates automatically if you change the map on uMap.

### Option B: Paste GeoJSON Data (Recommended for performance/offline)
1. Click the **"Share and download"** icon on the left toolbar.
2. Scroll down to the **"Download data"** section.
3. Click the **geojson** button to download the file.
4. Open the `.geojson` file and copy its content.
5. In your markdown file, you can paste it into a `<script>` block or use a dedicated component.

## Step 3: Verify in Dev Mode
1. Run `npm run dev` to see the changes.
2. Ensure the map renders correctly in the article.
