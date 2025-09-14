# How to Manage the New Blog System

Your blog system now uses a **lightweight JSON + separate content files** approach for better performance and maintainability.

## File Structure

```
src/data/
├── articles.json              # Lightweight metadata only
└── articles/                  # Individual content files
    ├── 221-mot-so-cach-thong-tac-bon-cau-tai-nha.md
    ├── 222-cach-tay-bon-cau-sach-bong.md
    ├── 220-cach-ve-sinh-va-tay-mui-o-bep-de-dang.md
    └── ...
```

## How It Works

1. **articles.json** contains only metadata (title, date, excerpt, image, etc.)
2. **articles/*.md** contain the full article content in Markdown format
3. The component loads metadata immediately and content on-demand

## Adding New Articles

### Step 1: Create Content File
Create a new `.md` file in `/src/data/articles/` with this naming pattern:
```
[ID]-[slug].md
```

Example: `223-cach-bao-quan-san-pham-zifat-999.md`

### Step 2: Write Content in Markdown
```markdown
# YOUR ARTICLE TITLE

Introduction paragraph here...

## Section 1: Main Topic

- Bullet point 1
- Bullet point 2

### Subsection
More detailed content...

## Section 2: Another Topic

Content continues...

## Liên hệ tư vấn

**CÔNG TY TNHH HÓA PHẨM PHÁT NGỌC ANH**  
**Hotline:** 0286.271.3214 - 0945.437.079  
**Email:** hoaphamphatngocanh@gmail.com
```

### Step 3: Add Metadata to articles.json
Add entry to the JSON array:
```json
{
  "id": 7,
  "title": "CÁCH BẢO QUẢN SẢN PHẨM ZIFAT 999",
  "slug": "cach-bao-quan-san-pham-zifat-999",
  "date": "15/09/2024",
  "excerpt": "Short description here...",
  "image": "/blog-images/storage-tips.jpg",
  "category": "Sản phẩm ZIFAT 999",
  "readTime": "4 phút đọc",
  "author": "Phát Ngọc Anh",
  "tags": ["bảo quản", "ZIFAT 999", "mẹo hay"],
  "featured": false,
  "url": "/blog/223/cach-bao-quan-san-pham-zifat-999",
  "contentFile": "223-cach-bao-quan-san-pham-zifat-999.md",
  "originalUrl": "https://phatngocanh.com/tin-tuc/223/..."
}
```

## Extracting Full Content from Your Website

To get complete content from existing articles on phatngocanh.com:

### Method 1: Manual Copy
1. Visit the article page (e.g., https://phatngocanh.com/tin-tuc/221/...)
2. Copy the full content
3. Convert to Markdown format
4. Save as `.md` file

### Method 2: Automated Extraction (Advanced)
```bash
# Download article HTML
curl -s "https://phatngocanh.com/tin-tuc/221/article.html" > temp.html

# Extract main content (you'll need to identify the content selector)
# This varies by website structure
```

## Benefits of This System

### 1. Performance
- JSON loads instantly (small file size)
- Content loads only when needed
- Better user experience

### 2. Maintainability  
- Easy to edit individual articles
- No huge JSON files
- Version control friendly

### 3. SEO Ready
- Each article can have its own URL
- Proper metadata structure
- Ready for static generation

### 4. Flexible Content
- Full Markdown support
- Rich formatting options
- Easy to add images, links, etc.

## Current Articles Status

✅ **Completed:**
- 221: Thông tắc bồn cầu (full content)
- 222: Tẩy bồn cầu sạch bóng (full content)  
- 220: Vệ sinh bếp (full content)

🔄 **Need Content Extraction:**
- 219: Vệ sinh gạch men
- 218: Dầu làm bóng xe
- 217: Men vi sinh WC
- 216: Bột thông cống
- 215: Khử mùi phòng tắm
- 214: Nước lau sàn nhà
- 213: Tẩy vết bẩn cotton
- 212: Nước lau sàn gỗ

## Next Steps

1. **Extract remaining article content** from your website
2. **Create individual .md files** for each article
3. **Update articles.json** with correct metadata
4. **Add proper URL routing** for individual article pages
5. **Implement markdown rendering** in the component

## URL Structure

Each article will have its own URL:
- `/blog/221/mot-so-cach-thong-tac-bon-cau-tai-nha`
- `/blog/222/cach-tay-bon-cau-sach-bong`
- etc.

This matches your original website structure and is SEO-friendly.

## Future Enhancements

- **Search functionality** across articles
- **Related articles** suggestions
- **Article sharing** buttons
- **Comment system** (if needed)
- **Print-friendly** versions
