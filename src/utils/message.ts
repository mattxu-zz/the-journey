import { message } from 'antd';
import config from '../config';

const success = (msg: String | null) => {
  message.success(msg, config.messageDuration);
}

const error = (msg: String | null) => {
  message.error(msg, config.messageDuration);
}

const warning = (msg: String | null) => {
  message.warning(msg, config.messageDuration);
}

const MessageService = {
  success,
  error,
  warning,
};

export default MessageService;
