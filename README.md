# @ContentChild 和 @ContentChildren

contentChild、contentChildren是关于`<ngcontent>`内容获取相关，其中`<ng-content>`的select属性支持选择器区分映射进来的内容。

```ts
// Ensure Change Detection runs before accessing the instance
@ContentChild('foo', { static: false }) foo!: ElementRef;
// If you need to access it in ngOnInt hook
@ViewChild(TemplateRef, { static: true }) foo!: TemplateRef;
```

以上功能不适用于ViewChildren或ContentChildren。它们将在变更检测运行后解析。

需要注意的是，设置static: true将不允许您从动态模板分辨率（例如*ngIf）获得结果。

添加了原理图支持以将现有代码迁移到此语法，因为将使用此语法Ivy 。您可以运行ng update @angular/core以迁移现有代码。