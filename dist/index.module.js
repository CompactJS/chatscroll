var o=function(o){var t=new MutationObserver(function(){var t;(t=o).offsetHeight>=t.scrollHeight||("function"==typeof t.scroll?t.scroll({top:t.scrollHeight,behavior:"smooth"}):t.scrollTop=t.scrollHeight)});return t.observe(o,{childList:!0,subtree:!0}),{detach:function(){t.disconnect()}}};export{o as observe};
//# sourceMappingURL=index.module.js.map
