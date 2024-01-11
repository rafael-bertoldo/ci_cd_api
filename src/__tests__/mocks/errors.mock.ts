export default {
  missingBearer: { error: { message: 'Missing bearer token' }, status: 401 },
  invalidSignature: { error: { message: 'invalid signature' }, status: 401 },
  jwtMalformed: { error: { message: 'jwt malformed' }, status: 401 },
};