//an observable that retrieves its value when first bound
ko.onDemandObservable = function (callback, target) {
	var _value = ko.observable();  //private observable

	var result = ko.computed({
		read: function () {
			//if it has not been loaded, execute the supplied function
			if (!result.loaded()) {
				callback.call(target);
			}
			//always return the current value
			return _value();
		},
		write: function (newValue) {
			//indicate that the value is now loaded and set it
			result.loaded(true);
			_value(newValue);
		},
		deferEvaluation: true  //do not evaluate immediately when created
	});

	//expose the current state, which can be bound against
	result.loaded = ko.observable();
	//load it again
	result.refresh = function () {
		result.loaded(false);
	};

	return result;
};

// https://github.com/knockout/knockout/wiki/Bindings---class
ko.bindingHandlers['class'] = {
    'update': function (element, valueAccessor) {
        if (element['__ko__previousClassValue__']) {
            ko.utils.toggleDomNodeCssClass(element, element['__ko__previousClassValue__'], false);
        }
        var value = ko.utils.unwrapObservable(valueAccessor());
        ko.utils.toggleDomNodeCssClass(element, value, true);
        element['__ko__previousClassValue__'] = value;
    }
};

ko.bindingHandlers.workItemUIControl = {
	init: function(element, valueAccessor, allBindings, viewModel, bindingContext)
	{
		if (bindingContext.$root["getWorkItem"])
		{
			var workItem = bindingContext.$root["getWorkItem"]();
			if (workItem)
			{
				var key = $(element).attr("data-uicomponentkey");
				var component = workItem.getUIComponents().getValue(key);

				if (component)
				{
					component.bind(element);
				}
			}
		}

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {


			if (bindingContext.$root["getWorkItem"]) {
				var workItem = bindingContext.$root["getWorkItem"]();
				if (workItem)
				{
					var key = $(element).attr("data-uicomponentkey");
					var component = workItem.getUIComponents().getValue(key);

					if (component)
					{
						component.unbind(element);
					}
				}
			}

			
		});

	},
	update: function(element, valueAccessor, allBindings, viewModel, bindingContext) 
	{
		if (bindingContext.$root["getWorkItem"]) {
			var workItem = bindingContext.$root["getWorkItem"]();
			if (workItem) {
				var key = $(element).attr("data-uicomponentkey");
				var component = workItem.getUIComponents().getValue(key);

				if (component) {
					component.updateBinding(element);
				}
			}
		}
	}
};
