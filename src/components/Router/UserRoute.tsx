import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { getAuth } from '../../store/auth/auth.selectors';

function UserRoute({ children, ...rest }: RouteProps) {
	const { currentUser } = useSelector(getAuth, shallowEqual);

	return (
		<Route
			{...rest}
			render={({ location }) =>
				currentUser ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export { UserRoute };
