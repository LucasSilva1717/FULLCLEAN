export class HealthCheckService {
  public execute() {
    return {
      status: 'ok',
      message: 'FullClean API está ativa, operante e seguindo a Clean Architecture!',
      uptime: Math.floor(process.uptime()) + ' segundos',
      timestamp: new Date().toISOString()
    };
  }
}