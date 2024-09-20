/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {assertInInjectionContext} from '../../di';
import {REQUIRED_UNSET_VALUE} from '../input/input_signal_node';

import {createModelSignal, ModelOptions, ModelSignal} from './model_signal';

export function modelFunction<T>(initialValue?: T): ModelSignal<T | undefined> {
  ngDevMode && assertInInjectionContext(model);

  return createModelSignal(initialValue);
}

export function modelRequiredFunction<T>(): ModelSignal<T> {
  ngDevMode && assertInInjectionContext(model);

  return createModelSignal(REQUIRED_UNSET_VALUE as T);
}

/**
 * `model` declares a writeable signal that is exposed as an input/output pair on the containing
 * directive. The input name is taken either from the class member or from the `alias` option.
 * The output name is generated by taking the input name and appending `Change`.
 *
 * The function exposes an API for also declaring required models via the
 * `model.required` function.
 *
 * @developerPreview
 * @docsPrivate Ignored because `model` is the canonical API entry.
 */
export interface ModelFunction {
  /**
   * Initializes a model of type `T` with an initial value of `undefined`.
   * Angular will implicitly use `undefined` as initial value.
   */
  <T>(): ModelSignal<T | undefined>;
  /** Initializes a model of type `T` with the given initial value. */
  <T>(initialValue: T, opts?: ModelOptions): ModelSignal<T>;

  required: {
    /**
     * Initializes a required model.
     *
     * Users of your directive/component need to bind to the input side of the model.
     * If unset, a compile time error will be reported.
     */
    <T>(opts?: ModelOptions): ModelSignal<T>;
  };
}

/**
 * `model` declares a writeable signal that is exposed as an input/output
 * pair on the containing directive.
 *
 * The input name is taken either from the class member or from the `alias` option.
 * The output name is generated by taking the input name and appending `Change`.
 *
 * @usageNotes
 *
 * To use `model()`, import the function from `@angular/core`.
 *
 * ```
 * import {model} from '@angular/core`;
 * ```
 *
 * Inside your component, introduce a new class member and initialize
 * it with a call to `model` or `model.required`.
 *
 * ```ts
 * @Directive({
 *   ...
 * })
 * export class MyDir {
 *   firstName = model<string>();            // ModelSignal<string|undefined>
 *   lastName  = model.required<string>();   // ModelSignal<string>
 *   age       = model(0);                   // ModelSignal<number>
 * }
 * ```
 *
 * Inside your component template, you can display the value of a `model`
 * by calling the signal.
 *
 * ```html
 * <span>{{firstName()}}</span>
 * ```
 *
 * Updating the `model` is equivalent to updating a writable signal.
 *
 * ```ts
 * updateName(newFirstName: string): void {
 *   this.firstName.set(newFirstName);
 * }
 * ```
 *
 * @developerPreview
 * @initializerApiFunction
 */
export const model: ModelFunction = (() => {
  // Note: This may be considered a side-effect, but nothing will depend on
  // this assignment, unless this `model` constant export is accessed. It's a
  // self-contained side effect that is local to the user facing `model` export.
  (modelFunction as any).required = modelRequiredFunction;
  return modelFunction as typeof modelFunction & {required: typeof modelRequiredFunction};
})();
