class DeleteProfileForm(forms.ModelForm):

    def save(self, commit=True):
        if commit:
            image_path = self.instance.image.path
            self.instance.delete()
            os.remove(image_path)
        return self.instance

    class Meta:
        model = Profile
        fields = ()


class DeleteExpenseForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for _, field in self.fields.items():
            # field.widget.attrs['readonly'] = 'readonly'
            field.widget.attrs['disabled'] = 'disabled'
            field.required = False

    def save(self, commit=True):
        if commit:
            self.instance.delete()
        return self.instance

    class Meta:
        model = Expense
        fields = ('title', 'description', 'image', 'price')
	    labels = {
            'image': 'Link to Image',
        }
