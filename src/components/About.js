/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
//import PropTypes from 'prop-types';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';

import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';


class About extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" >
                                J&J
                            </Avatar>
                        }
                        title="FARMACENTER LAB J&J"
                        subheader="September 7 2016"
                    />

                    <CardContent>
                        <Typography component="p">
                            si vosotros quereis tener mas tendencia compartid esta publicacion
                        </Typography>
                    </CardContent>
                    <CardActions disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>

                    </CardActions>

                </Card>
            </div>
        );
    }
}

export default (About);