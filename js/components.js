// Component Creation Functions

function createRecipeCard(recipe) {
    return `
        <div class="cookie-card fade-in-up">
            <div class="relative overflow-hidden h-64">
                <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-full object-cover">
                <div class="absolute top-4 right-4">
                    <span class="recipe-tag">${recipe.category}</span>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${recipe.name}</h3>
                <p class="text-gray-600 text-sm mb-4">${recipe.description}</p>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-amber-700 font-medium">
                        <i class="far fa-clock mr-1"></i> ${recipe.time}
                    </span>
                    <span class="text-gray-500 text-sm">
                        <i class="fas fa-users mr-1"></i> ${recipe.servings}
                    </span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">الصعوبة: ${recipe.difficulty}</span>
                    <button class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition" onclick="viewRecipe(${recipe.id})">
                        عرض الوصفة
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createTipCard(tip) {
    return `
        <div class="tip-card">
            <div class="tip-icon">
                <i class="${tip.icon}"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">${tip.title}</h3>
            <p class="text-gray-600">${tip.description}</p>
        </div>
    `;
}

function createTestimonialCard(testimonial) {
    const stars = Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('');
    
    return `
        <div class="testimonial-card">
            <div class="stars mb-4">
                ${stars}
            </div>
            <p class="text-gray-600 mb-6">"${testimonial.text}"</p>
            <div class="flex items-center">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div>
                    <h4 class="font-bold text-gray-800">${testimonial.name}</h4>
                    <p class="text-sm text-gray-500">${testimonial.role}</p>
                </div>
            </div>
        </div>
    `;
}

// Loading Component
function createLoadingSpinner() {
    return '<div class="loading"></div>';
}

// Success Message Component
function createSuccessMessage(message) {
    return `
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">${message}</span>
        </div>
    `;
}

// Error Message Component
function createErrorMessage(message) {
    return `
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">${message}</span>
        </div>
    `;
}