/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
goog.provide('fb.util.json');
goog.require('goog.json');


/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
fb.util.json.eval = function(str) {
  if (typeof JSON !== 'undefined' && goog.isDef(JSON.parse)) {
    return JSON.parse(str);
  } else {
    // NOTE: We could just use eval(), since this case is so rare and the strings we eval are always pretty safe
    // (generated by the server or the developer).  But goog.json.parse is only a few lines of code, so not
    // bothering for now.
    return goog.json.parse(str);
  }
};


/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
fb.util.json.stringify = function(data) {
  if (typeof JSON !== 'undefined' && goog.isDef(JSON.stringify))
    return JSON.stringify(data);
  else
    return goog.json.serialize(data);
};
