/* tailwind.config.js 配置文件 */
module.exports = {
  theme: {
    extend: {
      /* 扩展颜色系统 - 对应上述 CSS 变量 */
      colors: {
        primary: 'var(--primary-color)', /* 主要颜色 */
        secondary: 'var(--secondary-color)', /* 次要颜色 */
        accent: 'var(--accent-color)', /* 强调色 */
        surface: 'var(--surface-color)', /* 表面色 */
        'text-primary': 'var(--text-primary)', /* 主要文字 */
        'text-secondary': 'var(--text-secondary)', /* 次要文字 */
        'text-muted': 'var(--text-muted)', /* 弱化文字 */
        border: 'var(--border-color)', /* 边框颜色 */
        error: 'var(--error-color)', /* 错误颜色 */
        success: 'var(--success-color)', /* 成功颜色 */
        warning: 'var(--warning-color)', /* 警告颜色 */
        info: 'var(--info-color)', /* 信息颜色 */
      },
      
      /* 扩展字体大小 - 对应上述字体变量 */
      fontSize: {
        'xs': 'var(--font-size-xs)', /* 特小字体 */
        'sm': 'var(--font-size-sm)', /* 小字体 */
        'base': 'var(--font-size-base)', /* 基础字体 */
        'lg': 'var(--font-size-lg)', /* 大字体 */
        'xl': 'var(--font-size-xl)', /* 特大字体 */
        '2xl': 'var(--font-size-2xl)', /* 超大字体 */
      },
      
      /* 扩展间距系统 - 对应上述间距变量 */
      spacing: {
        'xs': 'var(--spacing-xs)', /* 特小间距 */
        'sm': 'var(--spacing-sm)', /* 小间距 */
        'md': 'var(--spacing-md)', /* 中等间距 */
        'lg': 'var(--spacing-lg)', /* 大间距 */
        'xl': 'var(--spacing-xl)', /* 特大间距 */
        '2xl': 'var(--spacing-2xl)', /* 超大间距 */
      },
      
      /* 扩展圆角系统 - 对应上述圆角变量 */
      borderRadius: {
        'xs': 'var(--border-radius-xs)', /* 特小圆角 */
        'sm': 'var(--border-radius-sm)', /* 小圆角 */
        'md': 'var(--border-radius-md)', /* 中等圆角 */
        'lg': 'var(--border-radius-lg)', /* 大圆角 */
        'xl': 'var(--border-radius-xl)', /* 特大圆角 */
        'full': 'var(--border-radius-full)', /* 完全圆角 */
      },
      
      /* 扩展阴影系统 - 对应上述阴影变量 */
      boxShadow: {
        'xs': 'var(--shadow-xs)', /* 特小阴影 */
        'sm': 'var(--shadow-sm)', /* 小阴影 */
        'md': 'var(--shadow-md)', /* 中等阴影 */
        'lg': 'var(--shadow-lg)', /* 大阴影 */
        'xl': 'var(--shadow-xl)', /* 特大阴影 */
      },
      
      /* 扩展字体族 - 对应上述字体变量 */
      fontFamily: {
        'sans': 'var(--font-family-sans)', /* 无衬线字体 */
        'serif': 'var(--font-family-serif)', /* 衬线字体 */
        'mono': 'var(--font-family-mono)', /* 等宽字体 */
      },
      
      /* 扩展行高系统 - 对应上述行高变量 */
      lineHeight: {
        'tight': 'var(--line-height-tight)', /* 紧密行高 */
        'normal': 'var(--line-height-normal)', /* 正常行高 */
        'relaxed': 'var(--line-height-relaxed)', /* 宽松行高 */
      },
      
      /* 扩展过渡动画 - 对应上述过渡变量 */
      transitionDuration: {
        'fast': 'var(--transition-fast)', /* 快速过渡 */
        'base': 'var(--transition-base)', /* 基础过渡 */
        'slow': 'var(--transition-slow)', /* 缓慢过渡 */
      },
      
      /* 扩展 z-index 层级 - 对应上述层级变量 */
      zIndex: {
        'dropdown': 'var(--z-dropdown)', /* 下拉菜单 */
        'sticky': 'var(--z-sticky)', /* 粘性定位 */
        'fixed': 'var(--z-fixed)', /* 固定定位 */
        'modal-backdrop': 'var(--z-modal-backdrop)', /* 模态框背景 */
        'modal': 'var(--z-modal)', /* 模态框 */
        'popover': 'var(--z-popover)', /* 弹出框 */
        'tooltip': 'var(--z-tooltip)', /* 工具提示 */
        'toast': 'var(--z-toast)', /* 通知 */
      },
    },
  },
  plugins: [
    /* 添加自定义组件 */
    function({ addComponents }) {
      addComponents({
        /* 使用上述通用样式覆盖 Tailwind 默认样式 */
        '.btn': {
          /* 按钮基础样式，继承上述按钮配置 */
          '@apply px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2': {},
        },
        '.form-input': {
          /* 表单输入样式，继承上述表单配置 */
          '@apply w-full px-3 py-2 border rounded-md focus:ring-2 focus:border-primary': {},
        },
        '.card': {
          /* 卡片样式，使用上述阴影和圆角 */
          '@apply bg-surface rounded-lg shadow-md p-6': {},
        },
      })
    },
  ],
}

/* 在主 CSS 文件中引入 Tailwind 并保留自定义样式 */
@tailwind base;    /* Tailwind 基础样式 */
@tailwind components;  /* Tailwind 组件样式 */
@tailwind utilities;   /* Tailwind 工具类 */

/* 在 Tailwind 之后引入上述通用模板，确保优先级 */
/* 这样可以保留 Tailwind 的便利性，同时维护项目的设计一致性 */