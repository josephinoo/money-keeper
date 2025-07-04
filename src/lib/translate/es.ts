import { addMessages } from 'svelte-i18n';

import type { Dictionary } from './types';

export const esDict: Dictionary = {
  'app.title': 'Money Keeper',
  // Common
  'common.back': 'Atrás',
  'common.select': 'Seleccionar',
  'common.accept': 'Aceptar',
  'common.apply': 'Aplicar',
  'common.available_variants': 'Variantes disponibles',
  'common.optional': 'opcional',
  'common.loading': 'Cargando...',
  'common.synchronizing': 'Sincronizando',
  'common.show_more': 'Mostrar más',
  'common.sorting': 'Ordenamiento',
  'common.sort_by': 'Ordenar por',
  'common.sort_direction': 'Dirección de orden',
  'common.ascending': 'Ascendente',
  'common.descending': 'Descendente',
  'common.grouping': 'Agrupación',
  'common.no_items': 'Aún no hay elementos',
  'common.nothing_found': 'No se encontró nada',
  'common.create': 'Crear',
  'common.save': 'Guardar',
  'common.add': 'Agregar',
  'common.save_changes_failure': 'Error al guardar los cambios',
  'common.save_changes_success': 'Los cambios fueron guardados',
  'common.search': 'Buscar',
  'common.clear': 'Limpiar',
  'common.cancel': 'Cancelar',
  'common.delete': 'Eliminar',
  'common.ok': 'Aceptar',
  'common.done': 'Hecho',
  'common.continue': 'Continuar',
  'common.reset': 'Restablecer',
  'common.go_back_to_list': 'Volver a la lista',
  'common.count': '{count} pzs.',
  'common.show': 'Mostrar',
  'common.hide': 'Ocultar',
  'common.data_problems': 'La inicialización del almacenamiento de datos finalizó con {count, plural, =1 {# error} other {# errores}}',
  'common.select_all': 'Seleccionar todo',
  'common.additional_options': 'Opciones adicionales',
  'common.duplicate': 'Duplicar',
  // Timezones
  'timezones.select_time_zone': 'Seleccionar zona horaria',
  'timezones.current_time_zone': 'Zona horaria actual',
  'timezones.favorite_time_zones': 'Zonas horarias favoritas',
  'timezones.all_time_zones': 'Todas las zonas horarias',
  'timezones.timezone_added_to_favorites': 'La zona horaria fue agregada a favoritos',
  'timezones.timezone_removed_from_favorites': 'La zona horaria fue eliminada de favoritos',
  // Tags
  'tags.add_modal_header': 'Agregar etiqueta',
  'tags.edit_modal_header': 'Editar etiqueta',
  'tags.title': 'Título',
  'tags.delete_tag': 'Eliminar etiqueta',
  'tags.add_tag_failure': 'Error al agregar etiqueta',
  'tags.edit_tag_failure': 'Error al editar etiqueta',
  'tags.delete_tag_failure': 'Error al eliminar etiqueta',
  // Language
  'language.select_language': 'Seleccionar idioma',
  // Auth
  'auth.login.title': 'Iniciar sesión',
  'auth.login': 'Usuario',
  'auth.password': 'Contraseña',
  'auth.sign_in': 'Iniciar sesión',
  'auth.incorrect_login_or_password': 'Usuario o contraseña incorrectos',
  'auth.incorrect_old_password': 'Contraseña anterior incorrecta',
  'auth.failed_to_login': 'Error al iniciar sesión',
  'auth.register.title': 'Registrarse',
  'auth.name': 'Nombre',
  'auth.phone': 'Teléfono',
  'auth.old_password': 'Contraseña anterior',
  'auth.new_password': 'Nueva contraseña',
  'auth.repeat_password': 'Repetir contraseña',
  'auth.passwords_must_be_same': 'Las contraseñas deben ser iguales',
  'auth.register': 'Registrarse',
  'auth.user_already_exists': 'El usuario ya existe',
  'auth.registration_success': 'El registro fue exitoso',
  'auth.registration_failure': 'Error en el registro',
  'auth.logout.title': 'Cerrar sesión',
  'auth.logging_out': 'Cerrando sesión...',
  'auth.sign_out': 'Cerrar sesión',
  'auth.profile': 'Perfil',
  'auth.logged_in_as': '¡Has iniciado sesión como {name}!',
  'auth.not_logged_in': 'No has iniciado sesión',
  'auth.continue_as_guest': 'Continuar como invitado',
  'auth.logged_in_as_guest_info': 'Estás usando la aplicación como invitado. Los datos no se sincronizarán con el servidor.',
  'auth.guest': 'Invitado',
  // Accounts
  'accounts.list': 'Lista de cuentas',
  'accounts.title': 'Cuentas',
  'accounts.no_data': 'Aún no hay cuentas. Crea una nueva.',
  'accounts.new_account': 'Nueva cuenta',
  'accounts.create_account': 'Crear cuenta',
  'accounts.create_account_failure': 'Error al crear cuenta',
  'accounts.create_account_success': 'La cuenta fue creada',
  'accounts.edit_account': 'Actualizar cuenta',
  'accounts.delete_account': 'Eliminar cuenta',
  'accounts.delete_account_confirm': '¿Estás seguro de que quieres eliminar la cuenta?',
  'accounts.delete_account_confirm_description':
    'Todas las operaciones de la cuenta también serán eliminadas. Esta acción no se puede deshacer.',
  'accounts.delete_account_failure': 'Error al eliminar cuenta',
  'accounts.delete_account_success': 'La cuenta fue eliminada',
  'accounts.name': 'Nombre',
  'accounts.currency': 'Moneda',
  'accounts.icon': 'Icono',
  'accounts.color': 'Color',
  'accounts.select_color': 'Seleccionar color',
  'accounts.tags': 'Etiquetas',
  'accounts.sort': 'Ordenar cuentas',
  'accounts.archived_accounts': 'Cuentas archivadas',
  'accounts.archive': 'Archivar',
  'accounts.archived': 'Archivada',
  'accounts.restore': 'Restaurar',
  // Analytics
  'analytics.title': 'Análisis',
  'analytics.categories.start_date': 'Fecha de inicio',
  'analytics.categories.end_date': 'Fecha de fin',
  'analytics.categories.monthly_interval': 'Mensual',
  'analytics.categories.custom_interval': 'Personalizado',
  'analytics.accounts.total': 'Total',
  'analytics.accounts.grouping': 'Agrupación',
  'analytics.accounts.grouping.not_selected': 'Sin agrupación',
  'analytics.accounts.grouping.not_selected.description': 'Mostrar todas las cuentas',
  'analytics.accounts.grouping.select_grouping': 'Seleccionar agrupación',
  'analytics.accounts.hide_zero_balance_accounts': 'Ocultar cuentas con saldo cero',
  'analytics.balance.legend': 'Leyenda',
  'analytics.groupings.title': 'Agrupaciones',
  'analytics.groupings.create_grouping': 'Agregar agrupación',
  'analytics.groupings.new_grouping': 'Nueva agrupación',
  'analytics.groupings.grouping_not_found': 'Agrupación no encontrada',
  'analytics.groupings.name': 'Nombre',
  'analytics.groupings.groups': 'Grupos',
  'analytics.groupings.groups.add': 'Agregar grupo',
  'analytics.groupings.groups.delete': 'Eliminar grupo',
  'analytics.groupings.groups.name': 'Nombre',
  'analytics.groupings.groups.color': 'Color',
  'analytics.groupings.groups.accounts': 'Cuentas',
  'analytics.groupings.groups.accounts.add': 'Agregar cuenta',
  'analytics.groupings.groups.accounts.delete': 'Eliminar',
  'analytics.groupings.groups.accounts.failed_to_add': 'Error al agregar cuenta',
  'analytics.groupings.groups.accounts.failed_to_delete': 'Error al eliminar cuenta',
  'analytics.groupings.groups.other': 'Otros',
  // Categories
  'categories.title': 'Categorías',
  'categories.incomings': 'Ingresos',
  'categories.outgoings': 'Gastos',
  'categories.no_data': 'Aún no hay categorías. Agrega una nueva.',
  'categories.new_category': 'Nueva categoría',
  'categories.incoming': 'Ingreso',
  'categories.outgoing': 'Gasto',
  'categories.create_category': 'Crear categoría',
  'categories.create_category_success': 'La categoría fue creada',
  'categories.create_category_failure': 'Error al crear categoría',
  'categories.edit_category': 'Editar categoría',
  'categories.delete_category': 'Eliminar categoría',
  'categories.delete_category_failure': 'Error al eliminar categoría',
  'categories.delete_category_success': 'La categoría fue eliminada',
  'categories.name': 'Nombre',
  'categories.icon': 'Icono',
  'categories.more': 'Más',
  // Categories list
  'categories.list.Alcohol': 'Alcohol',
  'categories.list.Bank': 'Banco',
  'categories.list.Beauty': 'Belleza',
  'categories.list.Books': 'Libros',
  'categories.list.Car': 'Automóvil',
  'categories.list.Children': 'Niños',
  'categories.list.Clothes': 'Ropa',
  'categories.list.Connection': 'Conexión',
  'categories.list.Debts': 'Deudas',
  'categories.list.Delivery': 'Delivery',
  'categories.list.Donations': 'Donaciones',
  'categories.list.Education': 'Educación',
  'categories.list.Electronics': 'Electrónicos',
  'categories.list.Entertainment': 'Entretenimiento',
  'categories.list.Fitness': 'Fitness',
  'categories.list.Fuel': 'Combustible',
  'categories.list.Furniture': 'Muebles',
  'categories.list.Gifts': 'Regalos',
  'categories.list.Hobby': 'Pasatiempos',
  'categories.list.Insurance': 'Seguros',
  'categories.list.Investment': 'Inversión',
  'categories.list.Journeys': 'Viajes',
  'categories.list.Laundry': 'Lavandería',
  'categories.list.Loans': 'Préstamos',
  'categories.list.Lunches': 'Almuerzos',
  'categories.list.Medicine': 'Medicina',
  'categories.list.Movies': 'Películas',
  'categories.list.Music': 'Música',
  'categories.list.Parking': 'Estacionamiento',
  'categories.list.Pets': 'Mascotas',
  'categories.list.Photos': 'Fotos',
  'categories.list.Products': 'Productos',
  'categories.list.Purchases': 'Compras',
  'categories.list.Renovation': 'Renovación',
  'categories.list.Restaurants': 'Restaurantes',
  'categories.list.Services': 'Servicios',
  'categories.list.Stationery': 'Papelería',
  'categories.list.Subscriptions': 'Suscripciones',
  'categories.list.Sweets': 'Dulces',
  'categories.list.Technic': 'Técnica',
  'categories.list.Textile': 'Textil',
  'categories.list.Tobacco': 'Tabaco',
  'categories.list.Transport': 'Transporte',
  // Icons
  'icons.title': 'Iconos',
  'icons.select_icon': 'Seleccionar icono',
  'icons.recommended': 'Recomendados',
  'icons.custom': 'Personalizado',
  // Groups
  'groups.title': 'Grupos',
  'groups.create_group': 'Crear grupo',
  'groups.name': 'Nombre',
  'groups.edit_group': 'Editar grupo',
  'groups.edit_group_name': 'Editar nombre del grupo',
  'groups.users': 'Usuarios',
  'groups.add_user': 'Agregar usuario',
  'groups.failed_to_add_user': 'Error al agregar usuario',
  'groups.username': 'Nombre de usuario',
  'groups.delete_user_confirm': '¿Estás seguro de que quieres excluir al usuario?',
  'groups.delete_user_confirm_description':
    'El usuario perderá acceso a las cuentas, categorías y operaciones de este grupo.',
  'groups.delete_user': 'Excluir',
  'groups.failed_to_delete_user': 'Error al excluir usuario del grupo',
  'groups.delete_group': 'Eliminar grupo',
  'groups.delete_group_confirm': '¿Estás seguro de que quieres eliminar el grupo?',
  'groups.delete_group_confirm_description':
    'Todas las cuentas, categorías y operaciones serán eliminadas. Esta acción no se puede deshacer.',
  'groups.failed_to_delete_group': 'Error al eliminar grupo',
  // Repeatings
  'repeatings.title': 'Operaciones recurrentes',
  'repeatings.no_data': 'Aún no hay recurrencias. Agrega una nueva.',
  'repeatings.active': 'Activa',
  'repeatings.inactive': 'Inactiva',
  'repeatings.operations': 'Operaciones',
  'repeatings.empty_repeating': 'Vacía',
  'repeatings.empty_repeating.info': 'Agrega una operación o elimina el elemento',
  // Transactions
  'transactions.title': 'Operaciones',
  'transactions.create_transaction': 'Crear operación',
  'transactions.new_transaction': 'Nueva operación',
  'transactions.incoming': 'Ingreso',
  'transactions.outgoing': 'Gasto',
  'transactions.transfer': 'Transferencia',
  'transactions.from': 'Desde',
  'transactions.to': 'Hacia',
  'transactions.account': 'Cuenta',
  'transactions.select_account': 'Seleccionar cuenta',
  'transactions.account_is_required': 'Selecciona una cuenta primero',
  'transactions.destination_account_is_required': 'Selecciona una cuenta de destino primero',
  'transactions.accounts_must_be_different': 'Selecciona cuentas diferentes',
  'transactions.date': 'Fecha',
  'transactions.time': 'Hora',
  'transactions.dateTime': 'Fecha y hora',
  'transactions.amount': 'Monto',
  'transactions.category': 'Categoría',
  'transactions.category_is_required': 'Selecciona una categoría primero',
  'transactions.comment': 'Comentario',
  'transactions.tags': 'Etiquetas',
  'transactions.edit_transaction': 'Editar operación',
  'transactions.create_transaction_success': 'La operación fue creada',
  'transactions.create_transaction_failure': 'Error al crear operación',
  'transactions.delete_transaction': 'Eliminar operación',
  'transactions.delete_transaction_success': 'La operación fue eliminada',
  'transactions.delete_transaction_failure': 'Error al eliminar operación',
  'transactions.future_operations': 'Operaciones futuras',
  'transactions.another_currency': 'Otra moneda',
  'transactions.same_currency': 'Misma moneda',
  'transactions.additional_parameters': 'Parámetros adicionales',
  'transactions.exclude_from_analytics': 'Excluir de análisis',
  'transactions.repeatings': 'Repetir operación',
  'transactions.repeatings.configure': 'Configurar',
  'transactions.repeatings.title': 'Opciones de repetición',
  'transactions.repeatings.create_new': 'Crear nueva recurrencia',
  'transactions.repeatings.select_existing': 'Seleccionar existente',
  'transactions.repeatings.select_repeating': 'Seleccionar recurrencia',
  'transactions.repeatings.interval': 'Intervalo de repetición',
  'transactions.repeatings.interval.day': '{count, plural, one {día} other {días}}',
  'transactions.repeatings.interval.week': '{count, plural, one {semana} other {semanas}}',
  'transactions.repeatings.interval.month': '{count, plural, one {mes} other {meses}}',
  'transactions.repeatings.interval.year': '{count, plural, one {año} other {años}}',
  'transactions.repeatings.every_x_days': '{count, plural, =1 {Cada día} other {Cada # días}}',
  'transactions.repeatings.every_x_weeks': '{count, plural, =1 {Cada semana} other {Cada # semanas}} el {day}',
  'transactions.repeatings.every_x_years': '{count, plural, =1 {Cada año} other {Cada # años}} {date}',
  'transactions.repeatings.every_x_day_of_month': 'Cada día {value} del mes',
  'transactions.repeatings.every_x_day_of_month.every': 'Cada',
  'transactions.repeatings.every_x_day_of_month.nth_day': 'día {value}',
  'transactions.repeatings.every_x_day_of_month.of_x_months': '{count, plural, =1 {del mes} other {de # meses}}',
  'transactions.repeatings.every_x_day_of_month.change': 'Cambiar',
  'transactions.repeatings.day_of_month.title': 'Día del mes',
  'transactions.repeatings.day_of_month.info': 'Escribe un valor del 1 al 31',
  'transactions.repeatings.end_date': 'Fecha de fin',
  'transactions.repeatings.operations_list': 'Mostrar lista de operaciones',
  // Transactions import
  'transactions.import': 'Importar',
  'transactions.import.title': 'Importar operaciones',
  'transactions.import.invalid_expression': 'Ingresa una búsqueda para filtrar operaciones de una categoría',
  'transactions.import.no_category': 'Sin categoría',
  'transactions.import.set_category': 'Establecer categoría',
  'transactions.import.select_category_title': 'Seleccionar categoría',
  'transactions.import.select_category_multi_title':
    'Seleccionar categoría para {count, plural, =1 {# operación} other {# operaciones}}',
  'transactions.import.apply': 'Aplicar categoría',
  'transactions.import.category_applied':
    'Categoría "{category}" aplicada para {count, plural, =1 {# operación} other {# operaciones}}',
  'transactions.import.select_category_for_all_operations': 'Seleccionar categorías para todas las operaciones',
  'transactions.import.finish': 'Finalizar importación',
  'transactions.import.finished': '{count, plural, one {# operación fue importada} other {# operaciones fueron importadas}}',
  'transactions.show_more': 'Mostrar más',
  // Import rules
  'transactions.import.rules.title': 'Reglas de importación',
  'transactions.import.rules.create': 'Crear regla',
  'transactions.import.rules.edit_rule': 'Editar regla',
  'transactions.import.rules.how_does_it_work': '¿Cómo funciona?',
  'transactions.import.rules.how_does_it_work.description':
    'Si la descripción de la operación satisface la condición de búsqueda, entonces se asignará la categoría seleccionada a la operación y se agregarán las etiquetas seleccionadas',
  'transactions.import.rules.condition': 'Condición de búsqueda',
  'transactions.import.rules.category': 'Categoría',
  'transactions.import.rules.tags': 'Etiquetas',
  'transactions.import.rules.category_or_tags_required': 'Selecciona categoría y/o etiquetas primero',
  'transactions.import.rules.save_rule_success': 'La regla fue guardada',
  'transactions.import.rules.save_rule_failure': 'Error al guardar regla',
  'transactions.import.rules.delete': 'Eliminar regla',
  'transactions.import.rules.delete_success': 'La regla fue eliminada',
  'transactions.import.rules.delete_failure': 'Error al eliminar regla',
  // System
  'system.category.transfer_in': 'Transferencia desde otra cuenta',
  'system.category.transfer_out': 'Transferencia hacia otra cuenta',
  // Currency rates
  'currency_rates.title': 'Tipos de cambio',
  'currency_rates.default_currency': 'Moneda principal',
  'currency_rates.new_currency_rate': 'Nuevo tipo de cambio',
  'currency_rates.currency1': 'Moneda 1',
  'currency_rates.currency2': 'Moneda 2',
  'currency_rates.rate': 'Tasa',
  'currency_rates.delete_currency_rate': 'Eliminar tipo de cambio',
  'currency_rates.delete_currency_rate_success': 'El tipo de cambio fue eliminado',
  'currency_rates.delete_currency_rate_failure': 'Error al eliminar tipo de cambio',
  // Import and Export
  'import_export.title': 'Importar / Exportar',
  'import_export.import': 'Importar',
  'import_export.export': 'Exportar',
  'import_export.raw_data_json': 'Datos RAW (json)',
  'import_export.parse_data': 'Analizar json',
  'import_export.start_import': 'Importar',
  'import_export.uploading': 'Subiendo...',
  'import_export.save': 'Guardar como json',
  'import_export.other_features': 'Otras funciones',
  'import_export.log_operations_keys': 'Registrar claves de operaciones',
  'import_export.categories': 'Categorías',
  'import_export.account_tags': 'Etiquetas de cuentas',
  'import_export.accounts': 'Cuentas',
  'import_export.operation_tags': 'Etiquetas de operaciones',
  'import_export.operations': 'Operaciones',
  'import_export.currency_rates': 'Tipos de cambio',
  'import_export.groupings': 'Agrupaciones',
  'import_export.nothing_to_import': 'Nada que importar. Los datos están actualizados',
  'import_export.import_success': '{count, plural, =1 {# elemento fue} other {# elementos fueron}} agregados',
  'import_export.import_failure': 'Error al importar elementos',
  'import_export.operations_keys_logged': 'Las claves de operaciones fueron registradas. Ver logs o consola',
  // Settings
  'settings.title': 'Configuración',
  'settings.language': 'Idioma',
  'settings.select_language': 'Seleccionar idioma',
  'settings.common': 'General',
  'settings.darkMode': 'Modo oscuro',
  'settings.theme': 'Tema',
  'settings.theme.light': 'Claro',
  'settings.theme.dark': 'Oscuro',
  'settings.theme.system': 'Sistema',
  'settings.import_export': 'Importar / Exportar',
  'settings.repeatings': 'Operaciones recurrentes',
  'settings.profile': 'Perfil',
  'settings.profile.change_name': 'Cambiar nombre',
  'settings.profile.change_name_failure': 'Error al cambiar nombre',
  'settings.profile.change_login': 'Cambiar usuario',
  'settings.profile.change_login_failure': 'Error al cambiar usuario',
  'settings.profile.change_password': 'Cambiar contraseña',
  'settings.profile.change_password_success': 'La contraseña fue cambiada',
  'settings.profile.change_password_failure': 'Error al cambiar contraseña',
  'settings.profile.change_workspace': 'Seleccionar espacio de trabajo',
  'settings.profile.change_workspace_failure': 'Error al seleccionar espacio de trabajo',
  'settings.profile.logout': 'Cerrar sesión',
  'settings.collaboration': 'Colaboración',
  'settings.collaboration.workspace': 'Espacio de trabajo',
  'settings.collaboration.workspaces': 'Espacios de trabajo',
  'settings.collaboration.invites': 'Invitaciones',
  'settings.collaboration.blocklist': 'Lista de bloqueados',
  'settings.debug_tools': 'Herramientas de depuración',
  'settings.logs': 'Registros',
  'settings.logs.filters': 'Filtros',
  'settings.logs.show_filters': 'Mostrar filtros',
  'settings.logs.hide_filters': 'Ocultar filtros',
  'settings.encryption': 'Encriptación',
  'settings.report_problem': 'Reportar un problema',
  'settings.version': 'Versión: {version}',
  'settings.uikit': 'Kit de UI',
};

addMessages('es-ES', esDict);