# [组件]ShadowDOM

Angular 渲染组件的方式有 3 种：

- Native：采用 ShadowDOM 的模式来进行渲染。
- Emulated：模拟模式。对于不能支持 ShadowDOM 模式的浏览器，Angular 在底层会采用模拟的方式来渲染组件，**这是 Angular 默认的渲染模式**。
- None：不采用任何渲染模式。直接把组件的 HTML 结构和 CSS 样式插入到 DOM 流里面，这种方式很容易导致组件互相之间出现 CSS 命名污染的问题。

> **关于ShadowDOM**
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
> 	<meta charset="UTF-8">
> 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
> 	<meta http-equiv="X-UA-Compatible" content="ie=edge">
> 	<title>Document</title>
> 	<style>
> 		#div {
> 			width: 300px;
> 			height: 50px;
> 			border: 1px solid #666;
> 			padding: 15px;
> 		}
> 		#my_input {
> 			color: red;
> 		}
> 	</style>
> </head>
> <body>
> 	<div id="div">This is shadow dom</div>
> 	<button>Click Me</button>
> </body>
> </html>
> <script>
> 	function createShadowDOM(elem) {
> 		let root = elem.createShadowRoot();
> 		root.appendChild(createStyle());
> 		root.appendChild(createInputDiv('Name', 'name'));
> 	}
> 
> 	function createStyle() {
> 		let style = document.createElement('style');
> 		style.textContent = 'div.input-div { height: 30px; width: 250px; }' +
> 		'font.input-font { line-height: 30px; font-size: 16px; color: #495A80; margin-right: 10px;}'+
> 		'span.input-area { width: 200px; height: 25px; line-height: 25px; padding-left: 5px; display: inline-block; color: #666; font-size: 16px; border: 1px solid #999; border-radius: 3px;}';
> 		return style;
> 	}
> 
> 	function createInputDiv(font, name) {
> 		let inputDiv = document.createElement('div');
> 		inputDiv.className = 'input-div';
> 		inputDiv.innerHTML = `<font class='input-font'>${font}</font><span id="my_input" class='input-area' contentEditable='true' id="${name}"></span>`;
> 		return inputDiv;
> 	}
> 
> 	createShadowDOM(document.querySelector('#div'));
> 	document.querySelector('button').addEventListener('click', function() {
> 		console.log(document.querySelector('#div').shadowRoot.querySelector('#name').innerHTML);
> 	});
> </script>
> ```

