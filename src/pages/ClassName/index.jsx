import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

export default function ClassName() {
  return <div className={cx('btn', 'btn-primary')}></div>;
}
