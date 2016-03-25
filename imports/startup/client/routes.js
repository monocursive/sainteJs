import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '../../ui/layouts/main_layout.jsx';
import HomeContainer from '../../ui/containers/home_container.jsx';
import EventsContainer from '../../ui/containers/events_container.jsx';


export default function() {

  FlowRouter.route('/', {
      action: function() {
        mount(MainLayout, {
          content: () => (<HomeContainer />)
        });
      }
  });
  FlowRouter.route('/events', {
      action: function() {
        mount(MainLayout, {
          content: () => (<EventsContainer />)
        });
      }
  });

}
