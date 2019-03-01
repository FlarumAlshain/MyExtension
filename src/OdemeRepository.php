<?php


namespace flarumalshain\myextension;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class OdemeRepository
{
    /**
     * Find a odeme by ID
     *
     * @param int $id
     * @param User $actor
     * @return Odeme
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function findOrFail($id, User $actor = null)
    {
        return Odeme::where('id', $id)->firstOrFail();
    }

    /**
     * Get all odemeler
     *
     * @param User|null $user
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all()
    {
        return Odeme::newQuery();
    }
}
