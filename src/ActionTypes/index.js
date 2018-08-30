import cloudinary from '../Store/Services/cloudinary';

export const LOGGED_USER = 'LOGGED_USER';

export const NEW_USER_REGISTER = 'NEW_USER_REGISTER';

export const SIGNIN_USER = 'SIGNIN_USER';

export const SIGNOUT_USER = 'SIGNOUT_USER';

export const START_SESSION = 'START_SESSION';

export const CLOSE_SESSION = 'CLOSE_SESSION';

export const UNLOGGED_USER = 'UNLOGGED_USER';

export const LOAD_IMAGE = 'LOAD_IMAGE';

export const CLEAR_IMAGE = 'CLEAR_IMAGE';

export const URL_UPLOAD_IMAGE = 'https://api.cloudinary.com/v1_1/dw3gqqnr8/image/upload';

export const PRESET_UPLOAD_IMAGE = cloudinary.preset;
