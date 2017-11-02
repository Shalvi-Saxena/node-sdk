"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonalityInsightsV3Generated = require("./v3-generated");
var extend = require("extend");
var requestFactory = require("../lib/requestwrapper");
var helper = require("../lib/helper");
var PersonalityInsightsV3 = /** @class */ (function (_super) {
    __extends(PersonalityInsightsV3, _super);
    function PersonalityInsightsV3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Generates a personality profile based on input text.
     *
     * Derives personality insights for up to 20 MB of input content written by an author, though the service requires much less text to produce an accurate profile; for more information, see [Providing sufficient input](https://console.bluemix.net/docs/services/personality-insights/input.html#sufficient). Accepts input in Arabic, English, Japanese, Korean, or Spanish and produces output in one of eleven languages. Provide plain text, HTML, or JSON content, and receive results in JSON or CSV format.
     *
     * @param {Object} params - The parameters to send to the service.
     * @param {Content|string} params.content - A maximum of 20 MB of content to analyze, though the service requires much less text; for more information, see [Providing sufficient input](https://console.bluemix.net/docs/services/personality-insights/input.html#sufficient). A JSON request must conform to the `Content` model.
     * @param {string} params.content_type - The type of the input: application/json, text/html, or text/plain. A character encoding can be specified by including a `charset` parameter. For example, 'text/html;charset=utf-8'.
     * @param {string} [params.content_language] - The language of the input text for the request: Arabic, English, Japanese, Korean, or Spanish. Regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. The effect of the `content_language` header depends on the `Content-Type` header. When `Content-Type` is `text/plain` or `text/html`, `content_language` is the only way to specify the language. When `Content-Type` is `application/json`, `content_language` overrides a language specified with the `language` parameter of a `ContentItem` object, and content items that specify a different language are ignored; omit this header to base the language on the specification of the content items. You can specify any combination of languages for `content_language` and `Accept-Language`.
     * @param {string} [params.accept_language] - The desired language of the response. For two-character arguments, regional variants are treated as their parent language; for example, `en-US` is interpreted as `en`. You can specify any combination of languages for the input and response content.
     * @param {boolean} [params.raw_scores] - If `true`, a raw score in addition to a normalized percentile is returned for each characteristic; raw scores are not compared with a sample population. If `false` (the default), only normalized percentiles are returned.
     * @param {boolean} [params.csv_headers] - If `true`, column labels are returned with a CSV response; if `false` (the default), they are not. Applies only when the `Accept` header is set to `text/csv`.
     * @param {boolean} [params.consumption_preferences] - If `true`, information about consumption preferences is returned with the results; if `false` (the default), the response does not include the information.
     * @param {Function} [callback] - The callback that handles the response.
     */
    PersonalityInsightsV3.prototype.profile_csv = function (params, callback) {
        var requiredParams = ['content', 'content_type'];
        var missingParams = helper.getMissingParams(params || {}, requiredParams);
        if (missingParams && callback)
            return callback(missingParams);
        var body = params.content;
        var query = { raw_scores: params.raw_scores, csv_headers: params.csv_headers, consumption_preferences: params.consumption_preferences };
        var parameters = {
            options: {
                url: '/v3/profile',
                method: 'POST',
                json: (params.content_type === 'application/json'),
                body: body,
                qs: query
            },
            defaultOptions: extend(true, this._options, {
                headers: {
                    'accept': 'text/csv',
                    'content-type': params.content_type,
                    'content-language': params.content_language,
                    'accept-language': params.accept_language
                }
            })
        };
        return requestFactory(parameters, callback);
    };
    ;
    return PersonalityInsightsV3;
}(PersonalityInsightsV3Generated));
module.exports = PersonalityInsightsV3;
