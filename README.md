# Getting Started with Create Laravel 8 App

```
composer create-project laravel/laravel:^8.0 laravel-api
 
cd example-app
 
php artisan serve
```

### For Install UI

🗏 Install UI: [![UI](https://img.shields.io/badge/Install-Laravel%20UI-orange)](https://packagist.org/packages/laravel/ui)

```composer require laravel/ui```

### For Install UI Auth

**When You Want To Quickly Set Up User Authentication In A Laravel Project Without Having To Manually Create All The Required Files And Routes.**

```php artisan ui:auth```

### For Install Sanctum

🗏 Install Sanctum: [![Sanctum](https://img.shields.io/badge/Install-Sanctum-purple)](https://laravel.com/docs/8.x/sanctum)

**Laravel Sanctum is a lightweight package for authentication in SPA (Single Page Application) or mobile application development.**

```composer require laravel/sanctum```

**To Publish The Configuration File And Migration Files That Come With The Sanctum Package.**

```php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"```

**To Execute Any Pending Database Migrations.**

```php artisan migrate```

**Add Sanctum's Middleware To Your API Middleware Group Within Your Application's `app/Http/Kernel.php file`:**

```
    'api' => [
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],

```

### Hierarchy
```

📂 app
    📂 Http
        📂 Controllers
        📂 Middleware
    📂 Models
    📂 Providers
        🗏 AppServiceProvider.php
            //To set the defaultStringLength to 191 in the Laravel application.
            //This is necessary to ensure compatibility with the default character set used in the database.**

            
            use Illuminate\Support\Facades\Schema;
                public function boot()
                {
                    Schema::defaultStringLength(191);
                }
📂 routes
    🗏 web.php

```


### Connect

🔗 You can find me on Stack Overflow: [![Stack Overflow Profile](https://img.shields.io/badge/Stack%20Overflow-Profile-orange)](https://stackoverflow.com/users/10623148/muhammad-umair)

🌐 Connect with me on LinkedIn: [![LinkedIn Profile](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/muhammad-umair-fullstack/)



## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
