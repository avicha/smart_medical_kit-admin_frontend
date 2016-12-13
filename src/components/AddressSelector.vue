<template>
<div>
    <select class="form-control" v-model="current_province_code">
        <option v-for="province in current_provinces" :value="province.code">{{province.name}}</option>
    </select>
    <select class="form-control" v-model="current_city_code">
        <option v-for="city in current_cities" :value="city.code">{{city.name}}</option>
    </select>
    <select class="form-control" v-model="current_region_code">
        <option v-for="region in current_regions" :value="region.code">{{region.name}}</option>
    </select>
</div>
</template>
<script>
import Vue from 'vue'
import {
    mapState
} from 'vuex'
import addresses from 'api/address'
import find from 'lodash/find'
import uniq from 'lodash/uniq'
import map from 'lodash/map'
import filter from 'lodash/filter'
import first from 'lodash/first'

export default {
    name: 'AddressSelector',
    props: ['address_updated_handler'],
    data() {
        return {
            current_province_code: null,
            current_provinces: this.get_provinces(),
            current_city_code: null,
            current_cities: [],
            current_region_code: null,
            current_regions: []
        }
    },
    watch: {
        current_province_code(province_code) {
            this.current_cities = this.get_cities(province_code)
            this.current_city_code = first(this.current_cities).code
        },
        current_city_code(city_code) {
            this.current_regions = this.get_regions(city_code)
            this.current_region_code = first(this.current_regions).code
        },
        current_region_code(region_code) {
            this.address_updated_handler(region_code)
        }
    },
    methods: {
        init(region_code) {
            let address = find(addresses, {
                region_code: (region_code || 110105).toString()
            })
            this.current_province_code = address.province_code
            Vue.nextTick(() => {
                this.current_city_code = address.city_code
                Vue.nextTick(() => {
                    this.current_region_code = address.region_code
                })
            })
        },
        get_provinces() {
            let province_keys = uniq(map(addresses, address => [address.province_code, address.province].join('_')))
            let provinces = map(province_keys, province_key =>
                ({
                    code: province_key.split('_')[0],
                    name: province_key.split('_')[1]
                })
            )
            return provinces
        },
        get_cities(province_code) {
            let city_keys = uniq(map(filter(addresses, {
                province_code
            }), address => [address.city_code, address.city].join('_')))
            let cities = map(city_keys, city_key =>
                ({
                    code: city_key.split('_')[0],
                    name: city_key.split('_')[1]
                })
            )
            return cities
        },
        get_regions(city_code) {
            let regions = map(filter(addresses, {
                city_code
            }), address => ({
                code: address.region_code,
                name: address.region
            }))
            return regions
        },
    }
}
</script>
