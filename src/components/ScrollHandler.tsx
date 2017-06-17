import * as React from 'react';

interface ScrollHandlerProps {
  onFocus?: any;
  isActive?: boolean;
}

interface ScrollHandlerState {}

class ScrollHandler extends React.Component<ScrollHandlerProps, ScrollHandlerState> {
  scrollHandlerRef;

  constructor() {
    super();
    this.state = {};
    this.onScrollHandler = this.onScrollHandler.bind(this);
  }

  componentDidMount() {
    this._handleEventBinding();
  }

  componentWillReceiveProps(nextProps: ScrollHandler) {
    this._handleEventBinding();
  }

  render() {
    return (
      <div ref={ref => (this.scrollHandlerRef = ref)}>
        {this.props.children}
      </div>
    );
  }

  onScrollHandler(e) {
    const scrollTop = this.scrollHandlerRef.scrollTop;
    const height = this.scrollHandlerRef.height;
    const windowHeight = window.innerHeight;
    console.group();
    console.log('scrollTop', scrollTop);
    console.log('height', height);
    console.log('windowHeight', windowHeight);
    console.groupEnd();
    this.props.onFocus(e.key);
  }

  _handleEventBinding() {
    setTimeout(() => {
      if (this.props.isActive) {
        window.addEventListener('scroll', this.onScrollHandler);
      } else {
        window.removeEventListener('scroll', this.onScrollHandler);
      }
    }, 0);
  }
}

export default ScrollHandler;
