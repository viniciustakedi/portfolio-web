import { enviroment } from './constants';
import * as jose from 'jose';

export const decodeJwt = (token: string | null) => {
	if (!token) { return null; }
	return jose.decodeJwt(token) as any;
}

export const getTokenJwt = () => {
	return localStorage.getItem('token');
}

export const isJwtValid = async (token: string | null, isLogin?: boolean) => {
	try {
		if (!token) { return false }

		const publicKey = await jose.importSPKI(enviroment.PUBLIC_KEY_JWT, enviroment.ALG_JWT)
		await jose.jwtVerify(token, publicKey, {
			issuer: enviroment.ISSUER_JWT,
		});

		if (isLogin) { localStorage.setItem('token', token); }

		return true;
	} catch (error) {
		localStorage.removeItem('token');
		return false;
	}
}
