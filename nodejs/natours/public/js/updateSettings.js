import axios from 'axios';
import showAlert from './alerts';
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} Updated successfully `);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
