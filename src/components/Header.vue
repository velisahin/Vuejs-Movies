<template lang="">
    <div className='header'>
      <nav>
        <ul>
          <RouterLink to="/" active-class="nav-active">
            <li>Ana Sayfa</li>
          </RouterLink>
          <RouterLink to="/userlist" active-class="nav-active">
            <li>Favoriler</li>
          </RouterLink>

        </ul>
      </nav>
      <h1>Vue Project</h1>
    </div>
</template>