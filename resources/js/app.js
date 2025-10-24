import './bootstrap';
import 'preline';
 

document.addEventListener('livewire:navigate', () => {
    window.HSStaticMethods.autoInit();
});