import paywall from './paywall.js';

const upsell = {
  upgrade_plan: 'Plan de actualización',
  compare_plans: 'Comparar planes',
  view_plans: 'Ver planes',
  create_tenant: {
    title: 'Selecciona tu plan de tenant',
    description:
      'Logto ofrece opciones de planes competitivos con una innovadora y asequible estructura de precios diseñada para empresas en crecimiento. <a>Más información</a>',
    base_price: 'Precio base',
    monthly_price: '{{value, number}}/mes',
    mau_unit_price: 'Precio unitario de MAU',
    view_all_features: 'Ver todas las características',
    select_plan: 'Seleccionar <name/>',
    free_tenants_limit: 'Hasta {{count, number}} tenant gratuito',
    free_tenants_limit_other: 'Hasta {{count, number}} tenants gratuitos',
    most_popular: 'Más popular',
    upgrade_success: 'Actualización a <name/> realizada con éxito',
  },
  mau_exceeded_modal: {
    title: 'Se ha superado el límite de MAU. Actualiza tu plan.',
    notification:
      'Tu MAU actual ha superado el límite de <planName/>. Por favor, actualiza tu plan a premium a tiempo para evitar la suspensión del servicio de Logto.',
    update_plan: 'Actualizar plan',
  },
  payment_overdue_modal: {
    title: 'Factura con pagos atrasados',
    notification:
      '¡Ups! El pago de la factura del inquilino <span>{{name}}</span> ha fallado. Por favor, pague la factura a tiempo para evitar la suspensión del servicio de Logto.',
    unpaid_bills: 'Facturas impagas',
    update_payment: 'Actualizar pago',
  },
  charge_notification_for_quota_limit:
    'Has alcanzado tu límite de cuota. Es posible que añadamos cargos por funciones que superen tu límite de cuota como complementos, una vez que finalicemos los precios.',
  charge_notification_for_token_limit:
    'Has alcanzado tu límite de cuota de token de {{value}}M. Es posible que añadamos cargos por funciones que superen tu límite de cuota como complementos, una vez que finalicemos los precios.',
  charge_notification_for_m2m_app_limit:
    'Has alcanzado tu límite de cuota para aplicaciones de máquina a máquina. Es posible que añadamos cargos por funciones que superen tu límite de cuota como complementos, una vez que finalicemos los precios.',
  paywall,
};

export default Object.freeze(upsell);
