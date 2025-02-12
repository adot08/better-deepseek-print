// 添加打印按钮
function addPrintButton() {
  const container = document.querySelector('.dad65929');
  if (!container) return;

  const button = document.createElement('button');
  button.className = 'deepseek-print-button';
  button.innerHTML = '打印对话';
  button.style.position = 'fixed';
  button.style.right = '20px';
  button.style.bottom = '20px';
  button.style.zIndex = '9999';

  button.addEventListener('click', handlePrint);
  document.body.appendChild(button);
}

// 处理打印功能
function handlePrint() {
  const container = document.querySelector('.dad65929');
  if (!container) return;

  // 保存当前页面状态
  const originalContent = document.body.innerHTML;
  const originalOverflow = document.body.style.overflow;

  // 创建打印内容
  const printContent = container.cloneNode(true);
  
  // 确保所有内容都可见
  const elements = printContent.getElementsByTagName('*');
  for (let el of elements) {
    if (window.getComputedStyle(el).display === 'none') {
      el.style.display = 'block';
    }
  }

  // 处理数学公式的样式
  const mathElements = printContent.querySelectorAll('.katex, .katex-html, .katex-display');
  mathElements.forEach(el => {
    // 保持数学公式的原始样式
    const originalStyle = window.getComputedStyle(el);
    el.style.cssText = originalStyle.cssText;
    
    // 防止不必要的换行
    el.style.whiteSpace = 'nowrap';
    el.style.display = 'inline-block';
    
    // 如果是display模式的公式，则保持块级显示
    if (el.classList.contains('katex-display')) {
      el.style.display = 'block';
      el.style.textAlign = 'center';
      el.style.margin = '1em 0';
    }
  });

  // 设置打印样式
  document.body.innerHTML = '';
  document.body.appendChild(printContent);
  document.body.style.overflow = 'visible';

  // 添加打印样式
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      body {
        margin: 0;
        padding: 20px;
      }
      * {
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }
      .deepseek-print-button {
        display: none !important;
      }
      .katex, .katex-html {
        white-space: nowrap !important;
        display: inline-block !important;
      }
      .katex-display {
        display: block !important;
        text-align: center !important;
        margin: 1em 0 !important;
      }
      @page {
        margin: 1cm;
      }
    }
  `;
  document.head.appendChild(style);

  // 执行打印
  window.print();

  // 恢复原始内容
  document.body.innerHTML = originalContent;
  document.body.style.overflow = originalOverflow;
  
  // 重新添加打印按钮
  addPrintButton();
}

// 监听页面变化，确保按钮始终存在
const observer = new MutationObserver((mutations) => {
  if (!document.querySelector('.deepseek-print-button')) {
    addPrintButton();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// 初始化
addPrintButton(); 