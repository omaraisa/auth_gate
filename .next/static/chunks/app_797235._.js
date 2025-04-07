(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_797235._.js", {

"[project]/app/hooks/actions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "login": (()=>login),
    "logout": (()=>logout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcgis$2f$core$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcgis/core/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcgis$2f$core$2f$identity$2f$IdentityManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcgis/core/identity/IdentityManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcgis$2f$core$2f$identity$2f$ServerInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcgis/core/identity/ServerInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zod/lib/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const config = {
    apiKey: ("TURBOPACK compile-time value", "AAPKc691d193fde14ea9bae49f48970f5fbcmPjkAffm__8tJdoM-iasTahd05z_ngTfiIdqY_FcU8Vp1t0my13dG7TlKBWfy5cx") ?? 'API_KEY_NOT_SET',
    portalUrl: ("TURBOPACK compile-time value", "https://gis.jda.gov.sa/portal") ?? 'PORTAL_URL_NOT_SET',
    tokenServiceUrl: ("TURBOPACK compile-time value", "https://gis.jda.gov.sa/portal/sharing/rest/generateToken") ?? 'PORTAL_TOKEN_NOT_SET'
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcgis$2f$core$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].apiKey = config.apiKey;
const serverInfo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcgis$2f$core$2f$identity$2f$ServerInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
    server: config.portalUrl,
    tokenServiceUrl: config.tokenServiceUrl
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcgis$2f$core$2f$identity$2f$IdentityManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerServers([
    serverInfo
]);
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].object({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(3, {
        message: "Invalid username"
    }).trim(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["z"].string().min(4, {
        message: "Password must be at least 4 characters"
    }).trim()
});
async function login(prevState, formData) {
    const result = loginSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        };
    }
    const { username, password } = result.data;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcgis$2f$core$2f$identity$2f$IdentityManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].generateToken(serverInfo, {
            username: "omaradmin",
            password: "1qa2ws@WS!QA",
            client: 'referer',
            referer: "http://localhost:3000"
        });
        if (serverInfo.server) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcgis$2f$core$2f$identity$2f$IdentityManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerToken({
                server: serverInfo.server,
                token: response.token,
                expires: response.expires
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("http://localhost:3000");
    } catch (error) {
        console.error('ArcGIS Authentication failed:', error);
    // return {
    //   errors: {
    //     username: ["Invalid username or password"], // Generic error message
    //   },
    // };
    }
}
async function logout() {
    // await deleteToken();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/login");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/login.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LoginForm": (()=>LoginForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/hooks/actions.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function LoginForm() {
    _s();
    const [state, loginAction, pending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"], undefined);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: loginAction,
        className: "flex max-w-[300px] flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "username",
                    name: "username",
                    placeholder: "username"
                }, void 0, false, {
                    fileName: "[project]/app/components/login.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/login.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            state?.errors?.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: state.errors.username
            }, void 0, false, {
                fileName: "[project]/app/components/login.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Password"
                }, void 0, false, {
                    fileName: "[project]/app/components/login.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/login.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            state?.errors?.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: state.errors.password
            }, void 0, false, {
                fileName: "[project]/app/components/login.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubmitButton, {
                pending: pending
            }, void 0, false, {
                fileName: "[project]/app/components/login.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/login.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "QIOzoFZvtaGDuH1KNDemkpY+9qs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = LoginForm;
function SubmitButton({ pending }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        disabled: pending,
        type: "submit",
        children: "Login"
    }, void 0, false, {
        fileName: "[project]/app/components/login.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c1 = SubmitButton;
var _c, _c1;
__turbopack_refresh__.register(_c, "LoginForm");
__turbopack_refresh__.register(_c1, "SubmitButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_797235._.js.map