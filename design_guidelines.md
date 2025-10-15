# File Upload Application - Design Guidelines

## Design Approach: Material Design System
**Justification:** This utility-focused application prioritizes clarity, functionality, and ease of use. Material Design provides excellent patterns for file management interfaces with clear visual feedback and familiar interaction patterns.

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 220 90% 56% (Blue - trust and reliability)
- Primary Hover: 220 90% 48%
- Success: 142 71% 45% (Green - successful uploads)
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 220 13% 18%
- Text Secondary: 220 9% 46%
- Border: 220 13% 91%

**Dark Mode:**
- Primary: 220 90% 60%
- Primary Hover: 220 90% 68%
- Success: 142 71% 50%
- Background: 220 13% 12%
- Surface: 220 13% 18%
- Text Primary: 220 9% 98%
- Text Secondary: 220 9% 70%
- Border: 220 13% 25%

### B. Typography
- **Font Family:** Inter (Google Fonts) for UI, JetBrains Mono for file names/technical data
- **Heading:** text-2xl font-semibold (Main title)
- **Subheading:** text-lg font-medium (Section headers)
- **Body:** text-base font-normal (File information)
- **Caption:** text-sm text-secondary (File metadata, timestamps)

### C. Layout System
**Spacing Units:** Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Container: max-w-4xl mx-auto px-4 py-8
- Section Spacing: space-y-8 between major sections
- Card Padding: p-6
- List Items: py-4 px-6
- Form Elements: gap-4

### D. Component Library

**Upload Zone (Primary Feature):**
- Large drag-and-drop area with dashed border (border-2 border-dashed)
- Height: min-h-64 with centered content
- Hover state: Background color shift (bg-primary/5)
- Active drag state: Border color change to primary
- Icon: Large upload cloud icon (w-16 h-16) in muted color
- Text: "Drag and drop files here or click to browse" with supported formats below
- Visual feedback: Smooth transitions on all states

**File List Display:**
- Card-based layout with subtle shadows (shadow-sm hover:shadow-md)
- Each file item includes:
  - File type icon (PDF, video icon from icon library)
  - File name (font-mono text-sm, truncated with ellipsis)
  - File size (text-xs text-secondary)
  - Upload timestamp (text-xs text-secondary)
  - Action buttons (View/Download) aligned right
- Alternating subtle background colors for better scanning (even:bg-surface/50)
- Dividers between items (border-b)

**Buttons:**
- Primary Upload: Solid fill with primary color, px-6 py-3, rounded-lg
- Secondary Actions (View/Download): Ghost style with hover background, px-4 py-2, rounded-md
- Icon buttons: Square w-10 h-10 for compact actions

**Empty State:**
- Centered illustration or icon
- "No files uploaded yet" message
- Encouraging subtext to upload first file

**Success/Error Messages:**
- Toast notifications positioned top-right
- Success: Green background with check icon
- Error: Red background with alert icon
- Auto-dismiss after 4 seconds with smooth fade

### E. Animations
- **Upload Progress:** Linear progress bar (h-1) with animated width change
- **File Appearance:** Subtle fade-in and slide-up (duration-300) for newly uploaded items
- **Hover States:** Scale-102 on file cards, color transitions duration-200
- **Drag States:** Smooth border and background color transitions

## Page Structure

**Single-Page Layout:**
1. **Header Section** (sticky top-0, backdrop-blur):
   - App title with upload icon
   - Optional file count badge showing total uploads

2. **Upload Section** (mb-8):
   - Prominent drag-and-drop zone
   - File type restrictions displayed clearly (text-xs)
   - Browse button as alternative to drag-and-drop

3. **Files Grid Section**:
   - Section header: "Uploaded Files" with count
   - Responsive grid (grid-cols-1 gap-4)
   - Each file card with consistent spacing and alignment
   - Sticky section header when scrolling

4. **Footer** (mt-16, text-center):
   - Small text with attribution or storage info
   - Privacy/terms links if needed

## Responsive Behavior
- Mobile (base): Single column, full-width upload zone, stacked file info
- Tablet (md:): Larger upload zone, file metadata inline
- Desktop (lg:): Optimal max-width container, spacious layout

## Accessibility Features
- High contrast ratios (WCAG AA compliant)
- Focus indicators on all interactive elements (ring-2 ring-primary)
- Semantic HTML (header, main, section elements)
- ARIA labels for icon buttons
- Keyboard navigation support for all actions
- Screen reader announcements for upload success/failure

## Images
**No hero images required** - This is a utility application where functionality is paramount. Use icons from Heroicons (outline style) for visual clarity:
- Cloud upload icon for upload zone
- Document/video icons for file types
- Check/alert icons for status messages