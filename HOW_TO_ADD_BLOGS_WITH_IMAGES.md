# How to Add New Blog Posts with Images

This guide explains how to add new blog posts to your ZIFAT 999 website, including how to add images directly in the markdown files.

## Step 1: Prepare Your Images

Before creating the blog post, prepare your images:

1. **Save images in the correct directory:**
   ```
   public/blog-content-images/
   ```

2. **Use descriptive filenames:**
   ```
   ✅ Good examples:
   - toilet-cleaning-guide.jpg
   - car-polish-before-after.jpg
   - zifat-999-product-showcase.jpg
   
   ❌ Bad examples:
   - image1.jpg
   - photo.png
   - IMG_0001.jpg
   ```

3. **Recommended image formats and sizes:**
   - JPEG (.jpg) for photos - compress to under 200KB
   - PNG (.png) for graphics with transparency
   - Recommended dimensions: 600x400px or 800x600px
   - Keep file sizes under 500KB for faster loading

## Step 2: Create the Markdown File

1. **Create a new `.md` file in:**
   ```
   src/data/articles/[ID]-[slug].md
   ```
   
   Example: `src/data/articles/223-cach-ve-sinh-nha-bep-hieu-qua.md`

2. **Start with the article title as H1:**
   ```markdown
   # CÁCH VỆ SINH NHÀ BẾP HIỆU QUẢ
   ```

3. **Add images throughout your content using markdown syntax:**
   ```markdown
   ![Image description](/blog-content-images/your-image.jpg)
   ```

## Step 3: How to Add Images in Markdown

### Basic Image Syntax
```markdown
![Alt text for SEO](/blog-content-images/image-filename.jpg)
```

### Example with Real Content
```markdown
# CÁCH VỆ SINH NHÀ BẾP HIỆU QUẢ

![Nhà bếp sạch sẽ](/blog-content-images/clean-kitchen-overview.jpg)

Nhà bếp là nơi chuẩn bị thức ăn hàng ngày, việc giữ gì vệ sinh là vô cùng quan trọng...

## 1. Vệ sinh bồn rửa chén

![Cách vệ sinh bồn rửa](/blog-content-images/sink-cleaning-guide.jpg)

- Sử dụng ZIFAT 999 để làm sạch
- Chà xát nhẹ nhàng với bàn chải
- Xả sạch với nước

## 2. Làm sạch mặt bếp

![Vệ sinh mặt bếp](/blog-content-images/stove-cleaning-tips.jpg)

Các bước thực hiện:
- Tắt nguồn điện/gas
- Sử dụng sản phẩm ZIFAT 999
- Lau khô bằng khăn sạch

![Kết quả sau khi vệ sinh](/blog-content-images/kitchen-after-cleaning.jpg)
```

## Step 4: Update Articles JSON

Add your new article to `src/data/articles.json`:

```json
{
  "id": 8,
  "title": "CÁCH VỆ SINH NHÀ BẾP HIỆU QUẢ",
  "slug": "cach-ve-sinh-nha-bep-hieu-qua",
  "date": "15/09/2024",
  "excerpt": "Hướng dẫn chi tiết cách vệ sinh nhà bếp sạch sẽ, an toàn với sản phẩm ZIFAT 999...",
  "image": "/blog-images/clean-kitchen-overview.jpg",
  "category": "Vệ sinh nhà cửa",
  "readTime": "4 phút đọc",
  "author": "Phát Ngọc Anh",
  "tags": ["vệ sinh", "nhà bếp", "ZIFAT 999", "làm sạch"],
  "featured": false,
  "url": "/blog/cach-ve-sinh-nha-bep-hieu-qua",
  "contentFile": "223-cach-ve-sinh-nha-bep-hieu-qua.md",
  "originalUrl": "https://phatngocanh.com/tin-tuc/223/cach-ve-sinh-nha-bep-hieu-qua.html"
}
```

## Step 5: Image Best Practices

### 1. Image Placement Tips
- **Hero image**: Add right after the main title
- **Section images**: Add before or after each major section
- **Process images**: Add between steps to show progression
- **Result images**: Add at the end to show final outcome

### 2. SEO-Friendly Alt Text
```markdown
✅ Good alt text:
![Sản phẩm ZIFAT 999 làm sạch bồn cầu](/blog-content-images/zifat-toilet-cleaner.jpg)

❌ Bad alt text:
![Image](/blog-content-images/photo1.jpg)
```

### 3. Content Flow Example
```markdown
# ARTICLE TITLE

![Main hero image](/blog-content-images/hero-image.jpg)

Introduction paragraph explaining the topic...

## Section 1: Problem Description

![Problem illustration](/blog-content-images/problem-image.jpg)

Explanation of the problem...

## Section 2: Solution Steps

### Step 1: Preparation
![Preparation materials](/blog-content-images/prep-materials.jpg)

- List preparation steps
- Include ZIFAT 999 products

### Step 2: Application
![Application process](/blog-content-images/application-process.jpg)

- Detailed application steps
- Safety warnings

## Section 3: Results

![Before and after comparison](/blog-content-images/before-after.jpg)

Results description...

![Final result](/blog-content-images/final-result.jpg)

## Contact Information
**Hotline:** 0286.271.3214 - 0945.437.079
**Email:** hoaphamphatngocanh@gmail.com
```

## Step 6: Testing Your New Blog Post

1. **Save all files**
2. **Restart your development server** (if running)
3. **Navigate to `/news` to see your article in the list**
4. **Click on your article to view the full content**
5. **Check that all images load correctly**
6. **Verify the SEO title and meta description**

## Common Issues and Solutions

### Images Not Loading
- Check file path: `/blog-content-images/filename.jpg`
- Verify file exists in `public/blog-content-images/`
- Check filename spelling and case sensitivity

### Article Not Appearing
- Verify JSON syntax is correct (no missing commas)
- Check that `contentFile` matches your `.md` filename
- Ensure `slug` is unique and URL-friendly

### Styling Issues
- Images are automatically styled with rounded corners and shadows
- Use consistent image sizes for better appearance
- Test on mobile devices for responsive design

## Advanced Tips

### 1. Image Optimization
```bash
# Use online tools to compress images before uploading:
# - TinyPNG.com for JPEG/PNG compression
# - Squoosh.app for WebP conversion
```

### 2. Multiple Images in One Section
```markdown
## Comparison Gallery

![Before cleaning](/blog-content-images/before-1.jpg)
![During cleaning](/blog-content-images/during-1.jpg)
![After cleaning](/blog-content-images/after-1.jpg)
```

### 3. Product Showcase
```markdown
## Recommended ZIFAT 999 Products

![ZIFAT 999 Complete Set](/blog-content-images/zifat-product-set.jpg)

Our recommended products for this task:
- Product 1 description
- Product 2 description
```

Remember: Images make your blog posts more engaging and help readers understand the content better. Always use high-quality, relevant images that support your article's message!
