const particlesConfig = {
    'particles': {
    'number': {
        'value': 50
    },
    'color': {
        'value': ['#94a2b8']
    },
    'shape': {
        'type': 'circle'
    },
    'opacity': {
        'value': 0.5,
            'random': false,
            'anim': {
            'enable': false
        }
    },
    'size': {
        'value': 2.5,
            'random': true,
            'anim': {
            'enable': false,
        }
    },
    'line_linked': {
        'enable': false
    },
    'move': {
        'enable': true,
            'speed': 2,
            'direction': 'none',
            'random': true,
            'straight': false,
            'out_mode': 'out'
    }
},
    'interactivity': {
    'detect_on': 'canvas',
        'events': {
        'onhover': {
            'enable': false
        },
        'onclick': {
            'enable': false
        },
        'resize': true
    }
},
    'retina_detect': true
};

export default particlesConfig;