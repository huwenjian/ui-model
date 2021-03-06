import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDirective } from './directives/select.directive';
import { MultiSelectDirective } from './directives/multi-select.directive';
import { ToggleDirective } from './directives/toggle.directive';
import { PagerDirective } from './directives/pager.directive';
import { PaginationDirective } from './directives/pagination.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DraggableDirective } from './directives/draggable.directive';
import { FormatPipe } from './pipes/format.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { OrderNamePipe } from './pipes/order-name.pipe';
import { TypeNamePipe } from './pipes/type-name.pipe';
import { MomentPipe } from './pipes/moment.pipe';
import { SafeResourceUrlPipe } from './pipes/safe-resource-url.pipe';
import { ImgSrcFileDirective } from './directives/img-src-file.directive';
import { FileChangeDetectDirective } from './directives/file-change-detect.directive';
import { MeasureDirective } from './directives/measure.directive';
import { TypeAheadDirective } from './directives/type-ahead.directive';
import { MultiBindingDirective } from './directives/multi-binding.directive';
import { SafeStylePipe } from './pipes/safe-style.pipe';
import { DisabledDirective } from './directives/disabled.directive';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SafeScriptPipe } from './pipes/safe-script.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { TooltipDirective } from './directives/tooltip.directive';
import { FocusDirective } from './directives/focus.directive';
import { PreventDefaultDirective } from './directives/prevent-default.directive';
import { DefaultPipe } from './pipes/default.pipe';
import { IsEmptyPipe } from './pipes/is-empty.pipe';
import { IsNotEmptyPipe } from './pipes/is-not-empty.pipe';
import { TimesPipe } from './pipes/times.pipe';
import { CountDownDirective } from './directives/count-down.directive';
import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';
import { FormArrayExporterDirective } from './directives/form-array-exporter.directive';
import { FormGroupExporterDirective } from './directives/form-group-exporter.directive';
import { FieldErrorMapperPipe } from './pipes/field-error-mapper.pipe';
import { FieldMetadataDirective } from './directives/field-metadata.directive';
import { FieldLabelPipe } from './pipes/field-label.pipe';
import { TemplatePipe } from './pipes/template.pipe';

import { Modal, ModalService } from './services/modal.service';
import { TooltipService } from './services/tooltip.service';
import { NameMapper } from './services/name-mapper.service';

import { FormMaker } from './services/form-maker.service';
import { FormUtils } from './services/form-utils.service';
import { FieldErrorMapper } from './services/field-error-mapper.service';

import { UpdateTitleGuard } from './guards/update-title.guard';
import { DateInputDirective } from './directives/date-input.directive';
import { IsValidDatePipe } from './pipes/is-valid-date.pipe';
import { IsInvalidDatePipe } from './pipes/is-invalid-date.pipe';
import { DynamicComponentInputsDirective } from './directives/dynamic-component-inputs.directive';

export const ALL_SERVICES_OF_UI_MODEL_ANGULAR = [ModalService, TooltipService, FormMaker, FieldErrorMapper, NameMapper,
  FormUtils, UpdateTitleGuard];
export { Modal, ModalService, TooltipService, FormMaker, FieldErrorMapper, NameMapper, FormUtils, UpdateTitleGuard };

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    PagerDirective,
    PaginationDirective,

    ClickOutsideDirective,
    DraggableDirective,
    MeasureDirective,
    ImgSrcFileDirective,
    FileChangeDetectDirective,

    FormatPipe,
    OrderByPipe,
    OrderNamePipe,
    TypeNamePipe,
    MomentPipe,
    SafeResourceUrlPipe,
    TypeAheadDirective,
    MultiBindingDirective,
    SafeStylePipe,
    TooltipDirective,
    DisabledDirective,
    SafeHtmlPipe,
    SafeScriptPipe,
    SafeUrlPipe,
    FocusDirective,
    PreventDefaultDirective,
    DefaultPipe,
    IsEmptyPipe,
    IsNotEmptyPipe,
    TimesPipe,
    ObjectToArrayPipe,
    CountDownDirective,
    FormArrayExporterDirective,
    FormGroupExporterDirective,
    FieldErrorMapperPipe,
    FieldMetadataDirective,
    FieldLabelPipe,
    TemplatePipe,
    DateInputDirective,
    IsValidDatePipe,
    IsInvalidDatePipe,
    DynamicComponentInputsDirective,
  ],
  exports: [
    SelectDirective,
    MultiSelectDirective,
    ToggleDirective,
    PagerDirective,
    PaginationDirective,
    DateInputDirective,

    MultiBindingDirective,
    ClickOutsideDirective,
    DraggableDirective,
    MeasureDirective,
    ImgSrcFileDirective,
    FileChangeDetectDirective,
    TypeAheadDirective,
    TooltipDirective,
    DisabledDirective,
    FocusDirective,
    PreventDefaultDirective,
    CountDownDirective,
    FormArrayExporterDirective,
    FormGroupExporterDirective,
    FieldMetadataDirective,
    DynamicComponentInputsDirective,

    FormatPipe,
    OrderByPipe,
    OrderNamePipe,
    TypeNamePipe,
    MomentPipe,
    SafeResourceUrlPipe,
    SafeStylePipe,
    SafeHtmlPipe,
    SafeScriptPipe,
    DefaultPipe,
    IsEmptyPipe,
    IsNotEmptyPipe,
    TimesPipe,
    ObjectToArrayPipe,
    FieldErrorMapperPipe,
    FieldLabelPipe,
    TemplatePipe,
    IsValidDatePipe,
    IsInvalidDatePipe,
  ],
})
export class UiModelModule {
  static services = ALL_SERVICES_OF_UI_MODEL_ANGULAR;
}

export * from './accessors/base.value-accessor';
export * from './accessors/calendar.value-accessor';
export * from './accessors/select.value-accessor';
export * from './accessors/multi-select.value-accessor';

export * from './decorators/form-maker';

export * from './directives/toggle.directive';
export * from './directives/select.directive';
export * from './directives/pager.directive';
export * from './directives/pagination.directive';
export * from './directives/multi-select.directive';

export * from './directives/click-outside.directive';
export * from './directives/draggable.directive';
export * from './directives/measure.directive';
export * from './directives/img-src-file.directive';
export * from './directives/file-change-detect.directive';
export * from './directives/type-ahead.directive';
export * from './directives/tooltip.directive';
export * from './directives/disabled.directive';
export * from './directives/focus.directive';
export * from './directives/prevent-default.directive';
export * from './directives/count-down.directive';
export * from './directives/form-array-exporter.directive';
export * from './directives/form-group-exporter.directive';
export * from './directives/field-metadata.directive';
export * from './directives/date-input.directive';
export * from './directives/dynamic-component-inputs.directive';

export * from './utils/base-control-within-form/base-control-within-form';

export * from './pipes/format.pipe';
export * from './pipes/order-by.pipe';
export * from './pipes/order-name.pipe';
export * from './pipes/type-name.pipe';
export * from './pipes/moment.pipe';
export * from './pipes/safe-resource-url.pipe';
export * from './pipes/safe-url.pipe';
export * from './pipes/safe-html.pipe';
export * from './pipes/safe-script.pipe';
export * from './pipes/default.pipe';
export * from './pipes/is-empty.pipe';
export * from './pipes/is-not-empty.pipe';
export * from './pipes/times.pipe';
export * from './pipes/object-to-array.pipe';
export * from './pipes/field-error-mapper.pipe';
export * from './pipes/field-label.pipe';
export * from './pipes/template.pipe';
export * from './pipes/is-valid-date.pipe';
export * from './pipes/is-invalid-date.pipe';

export * from './validators/is-boolean.validator';
export * from './validators/is-integer.validator';
export * from './validators/is-date.validator';
export * from './validators/is-number.validator';
export * from './validators/min-value.validator';
export * from './validators/max-value.validator';
export * from './validators/url.validator';
export * from './validators/equals.validator';
export * from './validators/complexity.validator';

export * from './mappers/default-if-error';
export * from './mappers/to-json';
export * from './mappers/to-data';
export * from './mappers/to-text';
export * from './mappers/to-void';
export * from './mappers/to-boolean';
export * from './mappers/is-empty';
export * from './mappers/reverse';
