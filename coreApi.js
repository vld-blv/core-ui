/**
 * Developer: Stepan Burguchev
 * Date: 5/21/2015
 * Copyright: 2009-2015 Comindware®
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF Comindware
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

/* global define, require, Handlebars, Backbone, Marionette, $, _ */

define([
        './utils/utilsApi',
        './dropdown/dropdownApi',
        './meta',
        './list/listApi',
        './form/formApi',
        './serviceLocator',
        './nativeGrid/nativeGridApi',

        './application/Module',
        './application/views/behaviors/ContentViewBehavior',

        './services/RoutingService',
        './services/UrlService',
        './services/ModuleService',
        './services/MessageService',
        './services/WindowService',
        './services/GlobalEventService',
        './services/LocalizationService',
        './services/AjaxService',

        './collections/SlidingWindowCollection',
        './collections/VirtualCollection',
        './collections/behaviors/HighlightableBehavior',
        './models/behaviors/CollapsibleBehavior',
        './models/behaviors/HighlightableBehavior',
        './models/behaviors/SelectableBehavior',
        './views/behaviors/LoadingBehavior',

        './Bootstrapper'
    ],
    function (
        utilsApi,
        dropdownApi,
        meta,
        listApi,
        formApi,
        serviceLocator,
        nativeGridApi,

        Module,
        ContentViewBehavior,

        RoutingService,
        UrlService,
        ModuleService,
        MessageService,
        WindowService,
        GlobalEventService,
        LocalizationService,
        AjaxService,

        SlidingWindowCollection,
        VirtualCollection,
        CollectionHighlightableBehavior,

        CollapsibleBehavior,
        HighlightableBehavior,
        SelectableBehavior,
	
        LoadingBehavior,

        Bootstrapper
    ) {
        'use strict';

        //noinspection UnnecessaryLocalVariableJS
        /**
         * Core UI components: основные компоненты для построение веб-интерфейса Comindware.
         * @exports core
         * */
        var exports = {
            /**
             * Базовые компонеты приложения: модуль, header views etc
             * @namespace
             * */
            application: {
                Module: Module,
                views: {
                    behaviors: {
                        ContentViewBehavior: ContentViewBehavior
                    }
                }
            },
            /**
             * Базовые сервисы системы
             * @namespace
             * */
            services: {
                RoutingService: RoutingService,
                UrlService: UrlService,
                ModuleService: ModuleService,
                MessageService: MessageService,
                WindowService: WindowService,
                LocalizationService: LocalizationService,
                AjaxService: AjaxService
            },
            /**
             * Backbone-коллекции общего назначения
             * @namespace
             * */
            collections: {
                /**
                 * Behavior-объекты общего назначения для Backbone-коллекций.
                 * @namespace
                 * */
                behaviors: {
                    HighlightableBehavior: CollectionHighlightableBehavior
                },
                SlidingWindowCollection: SlidingWindowCollection,
                VirtualCollection: VirtualCollection
            },
            /**
             * Backbone-модели общего назначения
             * @namespace
             * */
            models: {
                behaviors: {
                    CollapsibleBehavior: CollapsibleBehavior,
                    HighlightableBehavior: HighlightableBehavior,
                    SelectableBehavior: SelectableBehavior
                }
            },
            views: {
                behaviors: {
                    LoadingBehavior: LoadingBehavior
                }
            },
            /**
             * Dropdown-компоненты. Должны использоваться для любой логики выпадающих меню, панелей и подобного.
             * Не подпадающий под концепцию этих компонентов дизайн выпадающих элементов должен быть пересмотрен.
             * @namespace
             * */
            dropdown: dropdownApi,
            form: formApi,
            list: listApi,
            nativeGrid: nativeGridApi,
            utils: utilsApi,
            meta: meta,
            serviceLocator: serviceLocator,
            bootstrapper: Bootstrapper
        };
        return exports;
    });
