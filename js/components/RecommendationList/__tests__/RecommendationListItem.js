import React from 'react';
import RecommendationListItem from '../RecommendationListItem';
import renderer from 'react-test-renderer';

const app = {
  'im:name': {
    label: 'Lineage2 Revolution'
  },
  'im:image': [
    {
      label:
        'http://is5.mzstatic.com/image/thumb/Purple117/v4/e4/5b/96/e45b9654-872a-2682-453a-a1955f5d6f6e/pr_source.png/53x53bb-85.png',
      attributes: {
        height: '53'
      }
    },
    {
      label:
        'http://is2.mzstatic.com/image/thumb/Purple117/v4/e4/5b/96/e45b9654-872a-2682-453a-a1955f5d6f6e/pr_source.png/75x75bb-85.png',
      attributes: {
        height: '75'
      }
    },
    {
      label:
        'http://is5.mzstatic.com/image/thumb/Purple117/v4/e4/5b/96/e45b9654-872a-2682-453a-a1955f5d6f6e/pr_source.png/100x100bb-85.png',
      attributes: {
        height: '100'
      }
    }
  ],
  summary: {
    label:
      "■■■■■ Game Features ■■■■■\n\n▶A Real World at your Fingertips◀\n\n- The Largest Persistant Open World on Mobile\n- Play in synchronous real-time with players from across the globe,\n- Experience the realm of Lineage2 Revolution from anywhere, anytime.\n\n▶The Groundbreaking Lineage Series: Better than Ever◀\n- Lineage's high quality graphics and favorite landmarks are optimized for mobile\n- Brought to life in breathtaking detail thanks to the Unreal 4 Engine.\n\n▶Clans and Fierce Competition◀\n-  An Unmatched Game Community \n- Take up arms with the best fighters in the world in massive PvP Clan battles,\n- Using your special skills to master epic Castle Raids and reap benefits together!\n\n■ Usage Details ■\n- Minimum Specifications : iPhone 5S and upper\n- Recommended Specification : iPhone 6 and upper \n\n■ Permission Details ■\n\n▶ Optional Permissions\n   -  Microphone : Allows players to voice chat.\n   -  Camera : Used for submitting queries to Customer Support.\n   ※ Please note: not allowing permission will not restrict gameplay. ※ \n\n▶ How to Retract Permission\n    - Settings > Application Manager > Permissions\n\n\n※ This app offers in-app purchases. You can disable this feature by adjusting your device’s settings.\n \nBy downloading this game, you are agreeing to our Terms of Service and Privacy Policy.\nAlso, under our Terms of Service and Privacy Policy, you must be at least 13 years of age to play.\n - Terms of Service: http://help.netmarble.com/policy/terms_of_service.asp?locale=en  \n - Privacy Policy: http://help.netmarble.com/policy/privacy_policy.asp?locale=en"
  },
  'im:price': {
    label: 'Get',
    attributes: {
      amount: '0.00000',
      currency: 'HKD'
    }
  },
  'im:contentType': {
    attributes: {
      term: 'Application',
      label: 'Application'
    }
  },
  rights: {
    label: '© Netmarble Games Corp.'
  },
  title: {
    label: 'Lineage2 Revolution - Netmarble Games Corp.'
  },
  link: {
    attributes: {
      rel: 'alternate',
      type: 'text/html',
      href:
        'https://itunes.apple.com/hk/app/lineage2-revolution/id1200727466?mt=8&uo=2'
    }
  },
  id: {
    label:
      'https://itunes.apple.com/hk/app/lineage2-revolution/id1200727466?mt=8&uo=2',
    attributes: {
      'im:id': '1200727466',
      'im:bundleId': 'com.netmarble.revolutionthm'
    }
  },
  'im:artist': {
    label: 'Netmarble Games Corp.',
    attributes: {
      href:
        'https://itunes.apple.com/hk/developer/netmarble-games-corp/id930364579?mt=8&uo=2'
    }
  },
  category: {
    attributes: {
      'im:id': '6014',
      term: 'Games',
      scheme: 'https://itunes.apple.com/hk/genre/ios-games/id6014?mt=8&uo=2',
      label: 'Games'
    }
  },
  'im:releaseDate': {
    label: '2017-06-13T08:11:53-07:00',
    attributes: {
      label: '13 June 2017'
    }
  }
};
const index = 1;
const onPressItem = jest.fn();
const recommendations = {
  isLoading: false,
  recommendations: []
};

it('renders without crashing', () => {
  const rendered = renderer
    .create(
      <RecommendationListItem
        app={app}
        index={index}
        onPressItem={onPressItem}
      />
    )
    .toJSON();
  expect(rendered).toBeTruthy();
});
