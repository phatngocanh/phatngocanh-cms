# How to Add New Blog Articles

This guide explains how to add new blog articles to your website easily.

## Step 1: Add Your Blog Images

1. Save your blog article images to `/public/blog-images/`
2. Use descriptive names like `new-product-2024.jpg` or `cleaning-tips-winter.jpg`
3. Recommended size: 400x300px or similar aspect ratio

## Step 2: Edit the Articles JSON File

Open `/src/data/articles.json` and add your new article to the array. Here's the template:

```json
{
  "id": 7,
  "title": "YOUR ARTICLE TITLE IN CAPS",
  "date": "DD/MM/YYYY",
  "excerpt": "Short description that appears on the article card (2-3 sentences max)...",
  "content": "Full article content here. Use \\n\\n for paragraph breaks.\n\n**Use double asterisks for headings:**\n\n**1. Main Point:**\n- Use dashes for bullet points\n- Like this\n- And this\n\n**2. Another Section:**\nRegular paragraph text here.\n\n**Important notes:**\nAlways end with product recommendations or company info.",
  "image": "/blog-images/your-image-name.jpg",
  "category": "Choose from: Vệ sinh nhà cửa, Sửa chữa nhà cửa, Chăm sóc xe, Sản phẩm ZIFAT 999",
  "readTime": "X phút đọc",
  "author": "Phát Ngọc Anh",
  "tags": ["tag1", "tag2", "tag3", "ZIFAT 999"],
  "featured": true or false
}
```

## Step 3: Important Guidelines

### Article ID
- Always use the next available number (current highest is 6, so use 7, 8, 9...)
- Never reuse or skip numbers

### Categories
Choose from these existing categories:
- `"Vệ sinh nhà cửa"` - House cleaning
- `"Sửa chữa nhà cửa"` - Home repairs  
- `"Chăm sóc xe"` - Car care
- `"Sản phẩm ZIFAT 999"` - ZIFAT 999 products

### Content Formatting
- Use `\\n\\n` for paragraph breaks
- Use `**Text:**` for section headings
- Use `- Item` for bullet points
- Always mention ZIFAT 999 products when relevant
- Include safety tips and usage instructions
- End with company contact info when appropriate

### Featured Articles
- Set `"featured": true` for important articles you want to highlight
- Limit to 3-4 featured articles total
- Featured articles appear first and may be highlighted in the UI

## Step 4: Example New Article

```json
{
  "id": 7,
  "title": "CÁCH BẢO QUẢN SẢN PHẨM TẨY RỬA HIỆU QUẢ",
  "date": "15/09/2024",
  "excerpt": "Bảo quản sản phẩm tẩy rửa đúng cách không chỉ giữ được chất lượng mà còn đảm bảo an toàn cho gia đình. Cùng tìm hiểu các mẹo hay...",
  "content": "Bảo quản sản phẩm tẩy rửa đúng cách không chỉ giữ được chất lượng mà còn đảm bảo an toàn cho gia đình.\n\n**1. Nguyên tắc bảo quản chung:**\n- Để nơi khô ráo, thoáng mát\n- Tránh ánh nắng trực tiếp\n- Đậy nắp kín sau khi sử dụng\n- Để xa tầm tay trẻ em\n\n**2. Bảo quản sản phẩm ZIFAT 999:**\n- Nhiệt độ lý tưởng: 15-25°C\n- Tránh để gần nguồn nhiệt\n- Không để đông lạnh\n\n**3. Dấu hiệu sản phẩm hỏng:**\n- Thay đổi màu sắc\n- Mùi bất thường\n- Kết tủa hoặc phân tầng\n\n**Liên hệ:** 0286.271.3214 để được tư vấn thêm về sản phẩm ZIFAT 999.",
  "image": "/blog-images/storage-tips.jpg",
  "category": "Sản phẩm ZIFAT 999",
  "readTime": "3 phút đọc",
  "author": "Phát Ngọc Anh",
  "tags": ["bảo quản", "an toàn", "ZIFAT 999", "mẹo hay"],
  "featured": false
}
```

## Step 5: Save and Test

1. Save the `articles.json` file
2. Refresh your website
3. Check that the new article appears in the blog section
4. Test the modal by clicking on the article
5. Verify the category filter works

## Tips for Writing Good Articles

1. **Use your expertise** - Write about real cleaning problems and solutions
2. **Promote your products naturally** - Mention ZIFAT 999 products as solutions
3. **Include safety tips** - Always mention proper usage and safety
4. **Use clear headings** - Break content into digestible sections
5. **Add practical value** - Give readers actionable advice they can use

## Need Help?

If you need assistance adding articles or encounter any issues, refer back to the existing articles in the JSON file as examples. The structure is consistent and easy to follow.

Remember: The website will automatically handle the display, filtering, and modal functionality - you just need to add the content to the JSON file!
