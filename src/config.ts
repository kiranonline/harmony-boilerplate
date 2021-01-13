interface Config {
	ROOT_SERVER_URL?: string;
	ROOT_WS_URL?: string;
	USE_WS_ACTION?: boolean;
	COMMON_AUTHORIZATION_HEADER?: string;
	COMMON_URL_PARAMS?: Array<{key: string; value: string}>;
	appName?: string;
}

declare global {
	interface Window {
		devToolsExtension: Function;
	}
}

const initConfig = (): Config => {
	let appConfig: Config = {};

	if (process.env.NODE_ENV === 'development') {
		/* ---------- Config Development --------- */
		appConfig = {
			appName: 'Harmony Boilerplate',
			USE_WS_ACTION: false,
			ROOT_SERVER_URL: 'https://fonoapi.freshpixl.com/v1/',
			COMMON_AUTHORIZATION_HEADER: 'uxfauthorization',
			COMMON_URL_PARAMS: [{ key: 'salesChannel', value: 'retail' }],
			ROOT_WS_URL: 'ws://localhost:3030',
		};
	} else if (process.env.NODE_ENV === 'production') {
		/* ---------- Config Production --------- */
		appConfig = {
			appName: 'Harmony Boilerplate',
			USE_WS_ACTION: false,
			ROOT_SERVER_URL: 'https://fonoapi.freshpixl.com/v1/',
			COMMON_AUTHORIZATION_HEADER: 'uxfauthorization',
			COMMON_URL_PARAMS: [{ key: 'salesChannel', value: 'retail' }],
			ROOT_WS_URL: 'ws://localhost:3030'
		};
	}

	return appConfig;
};

export const config = initConfig();
