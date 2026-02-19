# Admin Dashboard System

A comprehensive, modular admin dashboard for the Thriving Ladies Foundation built with Next.js, TypeScript, and Tailwind CSS.

## Architecture Overview

The admin dashboard is built with a modular architecture that promotes reusability and maintainability:

### Core Components

1. **AdminLayout** - Main layout wrapper that provides the overall structure
2. **AdminHeader** - Top navigation bar with search, notifications, and user actions
3. **AdminSidebar** - Collapsible sidebar navigation for desktop
4. **MobileAdminSidebar** - Mobile-friendly drawer navigation
5. **AdminBreadcrumb** - Contextual breadcrumb navigation
6. **AdminDashboardContent** - Content router for different admin sections

### Context Management

- **AdminContext** - Centralized state management for:
  - Active tab/section
  - Sidebar open/closed state
  - Mobile/desktop mode detection

### Features

#### Responsive Design
- **Desktop**: Collapsible sidebar with hover tooltips when collapsed
- **Mobile**: Slide-out drawer navigation
- **Tablets**: Adaptive layout based on screen size

#### Navigation Structure
- **Main**: Overview, Analytics
- **Content Management**: Photo Gallery, Videos, Projects
- **Operations**: Donations, Users, Reports
- **System**: Settings, Help & Support

#### Key Functionality
- **Dashboard Overview**: Key metrics, recent activity, quick actions
- **Settings Management**: General settings, notifications, security, website config
- **Modular Tab System**: Easy to add new sections/tabs
- **Breadcrumb Navigation**: Always know your current location
- **Mobile-First Design**: Fully responsive across all devices

## File Structure

```
components/admin/
├── admin-layout.tsx              # Main layout wrapper
├── admin-header.tsx              # Top navigation header
├── admin-sidebar.tsx             # Desktop sidebar navigation
├── mobile-admin-sidebar.tsx      # Mobile drawer navigation
├── admin-breadcrumb.tsx          # Breadcrumb navigation
├── admin-dashboard-content.tsx   # Content router
├── index.tsx                     # Component exports
└── tabs/
    ├── overview-tab.tsx          # Dashboard overview
    ├── settings-tab.tsx          # Admin settings
    └── [future-tabs].tsx         # Additional tab components

contexts/
└── admin-context.tsx             # Admin state management

app/admin/
└── page.tsx                      # Admin dashboard page
```

## Usage

### Basic Implementation

```tsx
import { AdminLayout } from "@/components/admin/admin-layout"
import { AdminDashboardContent } from "@/components/admin/admin-dashboard-content"

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <AdminDashboardContent />
    </AdminLayout>
  )
}
```

### Adding New Tabs

1. Create a new tab component in `components/admin/tabs/`
2. Import it in `admin-dashboard-content.tsx`
3. Add the case in the `renderContent()` switch statement
4. Add navigation item in `admin-sidebar.tsx`
5. Update breadcrumb mapping in `admin-breadcrumb.tsx`

### Example New Tab Component

```tsx
'use client'

export function NewTab() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">New Section</h2>
        <p className="text-muted-foreground">Section description</p>
      </div>
      
      {/* Your content here */}
    </div>
  )
}
```

## Styling System

The dashboard uses a consistent design system:

### Color Scheme
- **Primary Gradient**: `from-primary to-secondary`
- **Secondary Gradient**: `from-secondary to-accent`
- **Cards**: Shadow-lg with border-0 for modern look
- **Backgrounds**: Gradient overlays for depth

### Component Patterns
- **Stats Cards**: Consistent layout with icon, value, and trend
- **Action Cards**: Grouped related actions with appropriate styling
- **Navigation**: Active states with gradient backgrounds
- **Mobile**: Sheet/drawer components for space-efficient navigation

## Dependencies

The dashboard leverages these key packages:
- **UI Components**: Radix UI primitives via shadcn/ui
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with custom gradients
- **State Management**: React Context API
- **Responsive**: Built-in Tailwind responsive utilities

## Customization

### Adding Custom Themes
Update the Tailwind config to add new color schemes:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: 'your-primary-color',
      secondary: 'your-secondary-color',
      accent: 'your-accent-color'
    }
  }
}
```

### Modifying Navigation
Update `navigationItems` array in `admin-sidebar.tsx`:

```tsx
const navigationItems = [
  {
    title: "New Section",
    items: [
      { id: "new-tab", label: "New Tab", icon: YourIcon },
    ]
  }
]
```

## Performance Considerations

- **Lazy Loading**: Tab content is conditionally rendered
- **Context Optimization**: Minimal re-renders with focused state updates
- **Mobile Detection**: Efficient window resize handling with cleanup
- **Image Optimization**: Next.js Image component for logos and assets

## Future Enhancements

Planned improvements include:
- Data visualization components (charts, graphs)
- Real-time notifications system
- Advanced user permission management
- Export/import functionality for content
- Multi-language support
- Dark mode toggle
- Advanced search and filtering
- Bulk operations interface

## Support

For questions or contributions, please refer to the main project documentation or create an issue in the repository.