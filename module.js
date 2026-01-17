
import { animate, onScroll } from 'https://esm.sh/animejs';

export default class ObjectScaler {
  constructor(classNames) {
    this.classNames = classNames;
  }

  run() {
    for (const className of this.classNames) {
        const animation = animate(`.${className}`, {
            scale: 1,
            opacity: 1,
            duration: .5,
            ease: 'out(4)'
        });

        const scrollObserver = onScroll({
            container: 'body',
            enter: 'bottom-=150 top',
            leave: 'top-=80 bottom',
            sync: true,
        });

        scrollObserver.link(animation);
    }

    const animation0 = animate('.animated-element-0', {
        scale: 1,
        opacity: 1,
        duration: .5,
        ease: 'out(4)',
    });

    const scrollObserver0 = onScroll({
        container: 'body',
        enter: 'bottom-=200 top',
        leave: 'top-=80 bottom',
        sync: true,
    });

    scrollObserver0.link(animation0);
  }
}
