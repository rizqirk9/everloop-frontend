import axios from './index';

const header = (token = null) => {
  if (token) axios.defaults.headers.common.authorization = `Bearer ${token}`;
  else delete axios.defaults.headers.common.authorization;
};

export default header;
