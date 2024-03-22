function(instance, properties, context) {

    const { container, animation = 'fade', delay = 0, duration = 2000, easing = 'ease', debounceDelay = 50, throttleDelay = 99, offset = 120, mirror = false, once = false, anchor = 'top-bottom' } = properties;

    // Disconnect the existing observer if it exists
    if (instance.data.observer && instance.data.observer.disconnect) {
        instance.data.observer.disconnect();
    }

    $(document).ready(function () {
        let targetElement = document.getElementById(container);
        let targetSelector = '#' + container + ' > .bubble-element.group-item';

        // Check if the container has a 'data-aos' attribute
        if ($('#' + container + ' > .rows > .GroupItem.bubble-element.group-item')[0]) {
            targetElement = $('#' + container + ' > .rows > .bubble-element.group-item')[0];
            targetSelector = '#' + container + ' > .rows';
        }

        $(targetSelector).attr('data-aos', animation);
        $(targetSelector).attr('data-aos-offset', offset);
        $(targetSelector).attr('data-aos-delay', delay);
        $(targetSelector).attr('data-aos-duration', duration);
        $(targetSelector).attr('data-aos-easing', easing);
        $(targetSelector).attr('data-aos-mirror', mirror);
        $(targetSelector).attr('data-aos-once', once);
        $(targetSelector).attr('data-aos-anchor-placement', anchor);

        setTimeout(() => {
            // Initialize AOS with the provided configuration
            AOS.init({
                throttleDelay,
                debounceDelay,
            });
        }, 1500);

        const observerConfig = { childList: true };

        const mutationCallback = function (mutationsList, observer) {
            mutationsList.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.classList.contains('group-item')) {
                        node.setAttribute('data-aos', animation);
                        node.setAttribute('data-aos', animation);
                        node.setAttribute('data-aos-offset', offset);
                        node.setAttribute('data-aos-delay', delay);
                        node.setAttribute('data-aos-duration', duration);
                        node.setAttribute('data-aos-easing', easing);
                        node.setAttribute('data-aos-mirror', mirror);
                        node.setAttribute('data-aos-once', once);
                        node.setAttribute('data-aos-anchor-placement', anchor);
                        setTimeout(() => {
                            AOS.refreshHard();
                        }, 1500);
                    }
                });
            });
        };

        // Create a MutationObserver to watch for changes in the DOM
        if (targetElement) {
            instance.data.observer = new MutationObserver(mutationCallback);
            instance.data.observer.observe(targetElement, observerConfig);
        }
    });

}
