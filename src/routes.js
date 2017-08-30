
//import { Route, IndexRoute } from 'react-router'

import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Inbox from './components/Inbox';
import Message from './components/Message';
/*
export default (
    <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path="inboxs" component={Inbox} >
            <Route path="messages/:id" component={Message} />
        </Route>
    </Route>

)
*/
const routes = {
    path: '/',
    component: MainLayout,
    indexRoute: { component: Home },
    childRoutes: [
      {
        path: 'inboxs',
        component: Inbox,
        childRoutes: [{
          path: 'messages/:id',
          onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
        }]
      },
      {
        component: Inbox,
        childRoutes: [{
          path: 'messages/:id', component: Message
        }]
      }
    ]
  }

  export default routes