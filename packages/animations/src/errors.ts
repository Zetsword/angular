/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

/**
 * The list of error codes used in runtime code of the `animations` package.
 * Reserved error code range: 3000-3999.
 */
export const enum RuntimeErrorCode {
  // Invalid values
  INVALID_TIMING_VALUE = 3000,
  INVALID_STYLE_PARAMS = 3001,
  INVALID_STYLE_VALUE = 3002,
  INVALID_PARAM_VALUE = 3003,
  INVALID_NODE_TYPE = 3004,
  INVALID_CSS_UNIT_VALUE = 3005,
  INVALID_TRIGGER = 3006,
  INVALID_DEFINITION = 3007,
  INVALID_STATE = 3008,
  INVALID_PROPERTY = 3009,
  INVALID_PARALLEL_ANIMATION = 3010,
  INVALID_KEYFRAMES = 3011,
  INVALID_OFFSET = 3012,
  INVALID_STAGGER = 3013,
  INVALID_QUERY = 3014,
  INVALID_EXPRESSION = 3015,
  INVALID_TRANSITION_ALIAS = 3016,
  // Negative values
  NEGATIVE_STEP_VALUE = 3100,
  NEGATIVE_DELAY_VALUE = 3101,
  // Keyframe offsets
  KEYFRAME_OFFSETS_OUT_OF_ORDER = 3200,
  KEYFRAMES_MISSING_OFFSETS = 3202,
  // Missing item
  MISSING_OR_DESTROYED_ANIMATION = 3300,
  MISSING_PLAYER = 3301,
  MISSING_TRIGGER = 3302,
  MISSING_EVENT = 3303,
  // Triggers
  UNSUPPORTED_TRIGGER_EVENT = 3400,
  UNREGISTERED_TRIGGER = 3401,
  TRIGGER_TRANSITIONS_FAILED = 3402,
  TRIGGER_PARSING_FAILED = 3403,
  TRIGGER_BUILD_FAILED = 3404,
  // Failed processes
  VALIDATION_FAILED = 3500,
  BUILDING_FAILED = 3501,
  ANIMATION_FAILED = 3502,
  REGISTRATION_FAILED = 3503,
  CREATE_ANIMATION_FAILED = 3504,
  TRANSITION_FAILED = 3505,

  // Animations
  BROWSER_ANIMATION_BUILDER_INJECTED_WITHOUT_ANIMATIONS = 3600,
}
