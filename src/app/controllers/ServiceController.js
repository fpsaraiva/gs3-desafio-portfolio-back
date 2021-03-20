import services from '../models/services';

class ServiceController {
  index(request, response) {
    try {
      return response.json(services);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }
}

export default new ServiceController();
